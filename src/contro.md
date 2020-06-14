    public class BaseController<T, TModel> : AbstractBaseController<T, TModel>
        where T : BaseEntity
        where TModel : BaseDto
    {
        protected readonly IBaseService<T, TModel> Service;
        protected readonly IBus _bus;
        public BaseController(IBus bus, IServiceProvider serviceProvider)
        {
            var item = ServiceTypeFactory.Instance.TypeList.Find(x => x.Item1 == typeof(T));
            if (!item.Equals(default))
                Service = serviceProvider.GetRequiredService(item.Item3).MapToIBaseService<T, TModel>();
            this.Service = (IBaseService<T, TModel>)serviceProvider.GetRequiredService(typeof(IBaseService<T, TModel>));
            _bus = bus;
            SetService();
        }

        public sealed override void SetService()
        {
            base.Service = Service;
        }
    }

    [Route("api/v1/[controller]")]
    [ApiController]
    public abstract class AbstractBaseController<T, TModel> : ControllerBase 
        where T : BaseEntity
        where TModel : BaseDto
    {
        protected IBaseService<T, TModel> Service;


        public abstract void SetService();



        protected  IBus _bus;

        //public abstract AbstractBaseController(IBus bus, IServiceProvider serviceProvider);


        [Route("GetList")]
        [HttpGet]
        //[ProducesResponseType(typeof(List<TModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int) HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Index()
        {
            var result = await Service.GetList();
            if (result == null)
                throw new EntityNotFoundException("can not find item");
            return Ok(result);
        }

        [HttpGet("{id:long}")]
        [ApiConventionMethod(typeof(TaskApiConversion), nameof(TaskApiConversion.GetById))]
        public virtual async Task<IActionResult> GetById(long id)
        {
            var result = await Service.GetModelById(id);
            if (result == null)
                return NotFound();
            return Ok(result);
        }

        [HttpPost]
        [ApiConventionMethod(typeof(TaskApiConversion), nameof(TaskApiConversion.Create))]
        public virtual async Task<IActionResult> Create([FromBody] TModel model)
        {
            var validationMessage = await (message: default(string), model)
                .MapAsync(GetItemExistsInSystemAndConcurrencyMessage)
                .MapAsync(GetItemAlreadyExistsMessage);
            if (!string.IsNullOrEmpty(validationMessage.Item1))
                return ProcessValidationResult(validationMessage.Item1);
            //return BadRequest(new ValidationProblemDetails(_notifications.GetNotificationsByKey()));

            var result = await Service.InsertAndGetModel(model);
            if (result == null)
                return new InternalServerErrorObjectResult(model);
            return new CreatedResult(Request.Path, result);
        }


        protected ObjectResult ProcessValidationResult(string errorMessage)
        {
            var problemDetails = new ValidationProblemDetails()
            {
                Instance = nameof(TModel),
                Status = StatusCodes.Status412PreconditionFailed,
                Detail = errorMessage
            };
            return new ObjectResult(problemDetails
            )
            {
                ContentTypes = {"application/problem+json"},
                StatusCode = 403,
            };
        }

        [HttpPut("{id:long}")]
        //[ApiConventionMethod(typeof(TaskApiConversion), nameof(TaskApiConversion.Update))]
        public virtual async Task<IActionResult> Update(long id, [FromBody] TModel model)
        {
            var validationMessage = await (message: default(string), model)
                .MapAsync(GetItemExistsInSystemAndConcurrencyMessage)
                .MapAsync(GetItemAlreadyExistsMessage);
            if (!string.IsNullOrEmpty(validationMessage.Item1))
                return ProcessValidationResult(validationMessage.Item1);

            var result = await Service.UpdateAndGetModel(model);
            if (result == null)
                return new InternalServerErrorObjectResult(model);
            return Ok(model);
        }

        [HttpDelete("{id:long}")]
        public virtual async Task<IActionResult> Delete(long id)
        {
            await Service.Delete(id);
            return NoContent();
        }

        protected virtual async Task<(string, TModel)>
            GetItemExistsInSystemAndConcurrencyMessage((string message, TModel model) arg) =>
            await Service.CheckConcurrency(arg.message, arg.model);

        protected virtual async Task<(string, TModel)> GetItemAlreadyExistsMessage((string, TModel model) arg) =>
            (!string.IsNullOrEmpty(arg.Item1) || IsUniqueExpression == null) ? arg :
            (await Service.CanFindItem(IsUniqueExpression(arg.model))) ? arg :
            ($"{typeof(TModel).Name} already exists in the system", arg.model);


        protected virtual Func<TModel, Expression<Func<T, bool>>> IsUniqueExpression => default;

    }

    public class BaseController<T, TModel, TFilterModel> : AbstractBaseController<T, TModel>
        where T : BaseEntity
        where TModel : BaseDto
        where TFilterModel : BaseFilterModel
    {
        protected new readonly IBaseService<T, TModel, TFilterModel> Service;
        
        protected readonly IBus _bus;
        public BaseController(IBus bus, IServiceProvider serviceProvider) 
        {
            var item = ServiceTypeFactory.Instance.ThirdTypeList.Find(x => x.Item1 == typeof(T));
            if (!item.Equals(default))
            {
                this.Service = serviceProvider.GetRequiredService(item.Item4)
                    .MapToIBaseService<T, TModel, TFilterModel>();
                this.SetService();
            }

            //this.Service = (IBaseService<T, TModel, TFilterModel>)serviceProvider.GetRequiredService(typeof(IBaseService<T, TModel, TFilterModel>));
            _bus = bus;
        }


        public sealed override void SetService()
        {
            base.Service = Service;
        }
    }
    
    
    
    
    
       public class TaskTypeController : BaseController<TaskType, TaskTypeDto, TaskTypeFilterModel>
    {
        public TaskTypeController(IBus bus, IServiceProvider serviceProvider) : base(bus, serviceProvider)
        {

        }

        public ITaskTypeService DeriveService => (ITaskTypeService)Service;

        [Route("GetTaskTypeList/{themeId}")]
        public async Task<List<TaskTypeDto>> GetListByThemeId(long themeId)=> await DeriveService.GetTypeListByThemeId(themeId);

        [Route("searchFilter")]
        [HttpPost]
        public async Task<PagedList<TaskTypeDto>> SearchTaskTypePagingFilter(TaskTypeFilterModel filterModel)
        {
            var result = await DeriveService.PagingFilter(new TaskTypeFilterSpec(filterModel));
           
            return result;
        }


    
    }
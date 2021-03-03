/* eslint-disable */
let button = document.getElementById('myButton');

const messagesToSend = [
    {
        title: 'new Message',
        body: 'Hello there',
        userId: 1
    },
    {
        title: 'new Message 2',
        body: 'Hello there again',
        userId: 1
    },
    {
        title: 'new Message 3',
        body: 'Hello there again again',
        userId: 1
    },
    {
        title: 'new Message 4',
        body: 'Hello there again 4 times',
        userId: 1
    }
];


button.addEventListener('click', function(){
    messagesToSend.forEach(
        (item) => {
            sendMessage(item);
        }        
    );
    messageQueueSync();
});

 public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            finally
            {
                _logger.LogInformation(
                    "Request {method} {url} => {statusCode}",
                    context.Request?.Method,
                    context.Request?.Path.Value,
                    context.Response?.StatusCode);

                //context.Request.Body;
            }
        }
 app.UseMiddleware<RequestLoggingMiddleware>();

  public class RequestLoggingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger _logger;

        public RequestLoggingMiddleware(RequestDelegate next, ILoggerFactory loggerFactory)
        {
            _next = next;
            _logger = loggerFactory.CreateLogger<RequestLoggingMiddleware>();
        }

        public async Task Invoke(HttpContext context)
        {
            
            try
            {

                //context.Request.EnableRewind();
                string requestBodyPayload = await ReadRequestBody(context.Request);
                //HttpRequestRewindExtensions.EnableBuffering(context.Request);
                //Stream body = context.Request.Body;
                //byte[] buffer = new byte[Convert.ToInt32(context.Request.ContentLength)];
                //await context.Request.Body.ReadAsync(buffer, 0, buffer.Length);
             
                //body.Seek(0, SeekOrigin.Begin);
                //context.Request.Body = body;
                //StreamReader reader = new StreamReader(body);
                //string text = reader.ReadToEnd();
                //var request = await FormatRequest(context.Request);
                //var body = await ReadBodyFromRequest(context.Request);
                await _next(context);
            }
            finally
            {
                //string jsonData = new StreamReader(context.Request.Body).ReadToEnd();
                _logger.LogInformation(
                    "Request {method} {url} => {statusCode}",
                    context.Request?.Method,
                    context.Request?.Path.Value,
                    context.Response?.StatusCode);

                //context.Request.Body;
            }
        }


        private async Task<string> ReadRequestBody(HttpRequest request)
        {
            HttpRequestRewindExtensions.EnableBuffering(request);

            var body = request.Body;
            var buffer = new byte[Convert.ToInt32(request.ContentLength)];
            await request.Body.ReadAsync(buffer, 0, buffer.Length);
            string requestBody = Encoding.UTF8.GetString(buffer);
            body.Seek(0, SeekOrigin.Begin);
            request.Body = body;

            return $"{requestBody}";
        }
        private static async Task<string> ReadBodyFromRequest(HttpRequest request)
        {
            // Ensure the request's body can be read multiple times (for the next middlewares in the pipeline).
            request.EnableBuffering();

            using var streamReader = new StreamReader(request.Body, leaveOpen: true);
            var requestBody = await streamReader.ReadToEndAsync();

            // Reset the request's body stream position for next middleware in the pipeline.
            request.Body.Position = 0;
            return requestBody;
        }
        private async Task<string> FormatRequest(HttpRequest request)
        {
            var body = request.Body;

            //This line allows us to set the reader for the request back at the beginning of its stream.
            request.EnableBuffering();

            //We now need to read the request stream.  First, we create a new byte[] with the same length as the request stream...
            var buffer = new byte[Convert.ToInt32(request.ContentLength)];

            //...Then we copy the entire request stream into the new buffer.
            await request.Body.ReadAsync(buffer, 0, buffer.Length);

            //We convert the byte[] into a string using UTF8 encoding...
            var bodyAsText = Encoding.UTF8.GetString(buffer);

            //..and finally, assign the read body back to the request body, which is allowed because of EnableRewind()
            request.Body = body;

            return $"{request.Scheme} {request.Host}{request.Path} {request.QueryString} {bodyAsText}";
        }
    }
// Background Sync Mechanism Functions

function sendMessage(message) {
    let messageItem = {
        title: message.title,
        body: message.body,
        userId: message.userId
    };

    openDatabase()
    .then(() => {
        writingObjectStore(messageItem);
    })
    .catch((e)=>{console.log(e)});

}

function messageQueueSync() {
    navigator.serviceWorker.ready.then(
        (registration) => {
            registration.sync.register('message-queue');
        }
    );
}

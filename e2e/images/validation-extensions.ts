import {extend, localize} from "vee-validate";
import {email, required, required_if} from "vee-validate/dist/rules";

export default class ValidationExtensions {
    
    public static register() {
        
        extend('email', email);
        extend('required', required);
        extend('required_if', required_if);
        
        extend('required_if_custom', {
            validate (value, args) {
                return {
                    required: false,
                    valid: args["required"] === false || (args["required"] === true && ['', null, undefined].indexOf(args["target"]) === -1)
                };
            },
            params: ['required', 'target'],
            message: '{_field_} is a required field'
        });
        
        extend('required_if_checkbox', {
            validate(value, args){
                return {
                    required: false,
                    valid: args["required"] === false || (args["required"] === true && args['optionIds'].length > 0 && args['optionIds'][0] !== "")
                }
            },
            params: ['required', 'optionIds'],
            message: "At least one checkbox needs to be selected"
        });

        // Custom Messages
        localize({
            en: {
                messages: {
                    required: '{_field_} is a required field'
                }
            }
        });

    }
}
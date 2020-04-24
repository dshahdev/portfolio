export class UtilService {
    // checks, if property exists
    // type of property is string, number or not
        // if not, create a default value

        static getStringOrDefault(data: any, propName: string): string {
            if(data != null && data.hasOwnProperty(propName)) {
                if(typeof data[propName] === "string") {
                    return data[propName];
                }
            }
            return "";
        }

        static getNumberOrDefault(data: any, propName: string): number {
            if(data != null && data.hasOwnProperty(propName)) {
                if(typeof data[propName] === "number") {
                    return data[propName];
                }
            }
            return 0;
        }
        static getBoolOrDefault(data: any, propName: string): boolean {
        
            if (data != null && data.hasOwnProperty(propName)) {
                //convert string into number
                if (typeof data[propName] === "boolean"){
                    return data[propName];
                }
            }
            
            return false;
        }
    
}
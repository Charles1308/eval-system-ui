export default function Percentage (type, percentages = [], computation = null, applyToRoles = null) {
    this.type = type; // Incentives or Incorporated

    this.percentages = percentages;
    this.cellIncorporated = this.percentages[0];

    /* 
        Ex:
        {
            '0': ['role1', 'role2'],
            ...
        }
    */
    this.onlyApplyToUserWithRoles = applyToRoles; 

    this.applyPercentage = function (arg, role) {
        if (typeof computation === 'function') {
            return computation(this.percentages);
        }

        if (typeof arg === 'function') {
            return arg(this.percentages);
        } else if (typeof arg === 'number') {
            if (this.onlyApplyToUserWithRoles) {
                let value = 0; 
                
                Object.keys(this.onlyApplyToUserWithRoles)
                .forEach(key => {
                    if (this.onlyApplyToUserWithRoles[key].includes(role)) {
                        value = arg * (this.percentages[key] / 100);
                    }
                });

                return value;
            }

            return arg * (this.percentages[0] / 100);
        } else {
            console.error("Received a string as an argument in applyPercentage function")
            return;
        }
    }
}
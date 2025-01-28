export class LocalStorageHelper {
    static storeToken(key: string, value: any, expirationTime: number): void {
        try {
            const dataToStore = {
                value: value,
                expiration:Date.now() + expirationTime*1000
            };
            localStorage.setItem(key, JSON.stringify(dataToStore));
        } catch (error) {
            console.error("Error saving to localStorage:", error);
        }
    }
    static getToken(key: string): any {
        try {
            const data = localStorage.getItem(key);
            if (data) {
                const parsedData = JSON.parse(data);
                const currentTime = Date.now();
                if (parsedData.expiration > currentTime) {
                    return true
                }
                }else {
                    this.remove(key);
                    return false;
                }
            
        } catch (error) {
            console.error("Error reading from localStorage:", error);
            return null;
        }
    }
    // Save a value to localStorage
    static save(key: string, value: any): void {
        try {
            const valueToStore = JSON.stringify(value);  // Stringify the value before saving it
            localStorage.setItem(key, valueToStore);
        } catch (error) {
            console.error("Error saving to localStorage:", error);
        }
    }

    // Retrieve a value from localStorage
    static get(key: string): any {
        try {
            const value = localStorage.getItem(key);
            if (value) {
                return JSON.parse(value);  // Parse the value from JSON format
            }
            return null;  // If the key doesn't exist, return null
        } catch (error) {
            console.error("Error reading from localStorage:", error);
            return null;
        }
    }

    // Remove a value from localStorage
    static remove(key: string): void {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error("Error removing from localStorage:", error);
        }
    }

    // Clear all items from localStorage
    static clear(): void {
        try {
            localStorage.clear();
        } catch (error) {
            console.error("Error clearing localStorage:", error);
        }
    }
}

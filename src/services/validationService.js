class ValidationService {
    validateSearchString(string) {
        if (string.trim() === "") {
            return false;
        }
        return true;
    }

    validateSearchType(type) {
        if (type === 'Category') {
            return false;
        }
        return true;
    }
    
    validateISBN(isbn) {
        if (isbn.indexOf('-') !== -1) {
            return false;
        }
        return true;
    }
}

export const validationService = new ValidationService();

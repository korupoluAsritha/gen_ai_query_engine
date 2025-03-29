const translateQuery = (nlQuery) => {
    const lowerQuery = nlQuery.toLowerCase();

    // Simple query translations
    if (lowerQuery.includes("all users")) {
        return "SELECT * FROM users";
    }

    if (lowerQuery.includes("over 30")) {
        return "SELECT * FROM users WHERE age > 30";
    }

    if (lowerQuery.includes("under 25")) {
        return "SELECT * FROM users WHERE age < 25";
    }

    if (lowerQuery.includes("exactly 30")) {
        return "SELECT * FROM users WHERE age = 30";
    }

    return "SELECT * FROM users";  // Default fallback
};

module.exports = translateQuery;

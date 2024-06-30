// userInfo.js

function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((originalName, index) => ({
        originalName: originalName,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage:
// const originalNames = ["Ben", "Grace", "Manza"];
// const modifiedNames = ["BEN", "GRACE", "MANZA"];
// console.log(createUserProfiles(originalNames, modifiedNames));
// Output: [
//   { originalName: "Ben", modifiedName: "BEN", id: 1 },
//   { originalName: "Grace", modifiedName: "GRACE", id: 2 },
//   { originalName: "Manza", modifiedName: "MANZA", id: 3 }
// ]

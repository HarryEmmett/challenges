/* 
   CREATE COPYS OF THE OBJECTS THAT DONT REFERENCE THE ORIGINAL 'arr2' OTHERWISE CHAGINING 
   A VALUE THAT REFERENCES 'arr2' WILL CHANGE THE CONTENTS OF 'arr2' 
   e.g const arr3 = arr2 REFERENCES 'arr2' SO MODIFYING arr3[0] = "test" CHANGES BOTH 'arr2' & 'arr3'
   
   A COPY WILL NEED TO BE CREATED e.g
   DEEPCOPY
   const copyArray = structuredClone(arr2);
   const copyArray = JSON.parse(JSON.stringify(arr2));
   
   SPREAD OPERATOR CAN ALSO BE USED TO DEEPCOPY DATA IF NOT NESTED
   OTHERWISE CREATES A SHALLOW COPY OF NESTED VALUES
   const copyArray = [{...foundObj}];
*/

const arr1 = [{a: "abc"}, {a: "123"}, {a: "hello"}];
const arr2 = [{a: "abc"}];

// WILL ADD A KEY OF 'test' TO 'arr2' AS 'object' IS DIRECTLY REFERENCING 'arr2'
arr1.forEach((a1) => {
    const object = arr2.find((a2) => {
        return a1.a === a2.a;
    });

    if(object) {
       object.test = "WILL add a key of test to arr2"
    }
});

// CREATING A DEEP COPY USING USING SPREAD OPERATOR ON NON NESTED ARRAY
arr1.forEach((a1) => {
    const object = arr2.find((a2) => {
        return a1.a === a2.a;
    });

    if(object) {
       const objectCopy = [{...object}];
       objectCopy.test = "WONT add a key of test to arr2";
    }
});

// CREATING A DEEP COPY USING USING PARSE AND STRINGIFY
arr1.forEach((a1) => {
    const copyArray = JSON.parse(JSON.stringify(arr2));
    const object = copyArray.find((a2) => {
        return a1.a === a2.a;
    });

    if(object) {
       object.test = "WILL add a key of test to arr2";
    };
});

// console.log(arr2)

// ====================================================================================================================================================================//

// USING THE SPREAD OPERATOR FOR CREATING DEEP COPIES OF NON NESTED ARRAYS / OBJECTS

// CHANGING C or A HERE WILL CHANGE 'a', 'b' and 'c' values
const a = [{ a: "1" }, { a: "2" }, { a: "3" }];
const b = a;
const c = b;

// CHANGING C or A HERE WILL CHANGE 'b' and 'c' values
const a = [{ a: "1" }, { a: "2" }, { a: "3" }];
const b = [...a];
const c = b;

// CHANGING C or A HERE WILL ONLY CHANGE 'c' or 'a' values
const a = [{ a: "1" }, { a: "2" }, { a: "3" }];
const b = [...a];
const c = [...b];

a[1] = "hello";
c[2] = "there";

// console.log(a);
// console.log(b);
// console.log(c);

// ASSIGNING REFERENCE FROM 'objB' to 'objA' MEANS CHANGES TO EITHER OBJECT WILL CHANGE THE OTHER OBJECT
const objA = { key: "test" };
const objB = objA;

const objA = { key: "test" };
const objB = { ...objA };

// ASSIGNING A DEEP COPY OF 'objB' to 'objA' MEANS CHANGES TO EITHER OBJECT WILL NOT CHANGE THE OTHER OBJECT
objA.newKey = "wont add to both";
objB.differentKey = "wont also add to both";

// console.log(objA);
// console.log(objB);

// ====================================================================================================================================================================//

// SPREAD OPERATOR WHEN DEALING WITH NESTING
const nestedA = { a: "A", b: { c: "C" } };
const nestedB = {...nestedA};

// TOP LEVEL VALUES ARE DEEP COPIED SO CHANGES WILL ONLY IMPACT THE OBJECT ALTERED
nestedA.a = "WILL CHANGE 'a' IN NESTED B";
nestedB.a = "WILL CHANGE 'a' IN NESTED A";

// NESTED VALUES ARE ONLY SHALLOWED COPIED SO CHANGES TO ONE WILL IMPACT THE OTHER
nestedA.b.c = "WILL CHANGE THE VALUE IN BOTH 'nestedA.b.c' and 'nestedB.b.c";
nestedB.b.c = "WILL CHANGE THE VALUE IN BOTH 'nestedA.b.c' and 'nestedB.b.c";

// console.log(nestedA);
// console.log(nestedB);

// ====================================================================================================================================================================//

// DEEP COPYING NESTING SO CHANGING ONE OBJECT DOESNT IMPACT THE OTHER
const nestingDeepCopy = { ...nestedA, b: {...nestedA.b} };

// WILL ONLY CHANGE 'nestedA.a' or 'nestingDeepCopy.a' AS DEEP COPIES NON NESTED VALUES
nestedA.a = "WILL CHANGE 'a' IN 'nestedA'";
nestingDeepCopy.a = "WILL 'a' IN 'nestingDeepCopy'";

// WILL ONLY CHANGE 'nestedA.b.c' or 'nestingDeepCopy.b.c' AS NESTED VALUES HAVE BEEN DEEP COPIED
nestedA.b.c = "WILL ONLY CHANGE 'nestedA.b.c' VALUE IN 'nestedA'";
nestingDeepCopy.b.c = "WILL ONLY CHANGE 'nestingDeepCopy.b.c' VALUE IN 'nestedingDeepCopy'";

// console.log(nestedA);
// console.log(nestingDeepCopy);

// ====================================================================================================================================================================//

const alsoNested = [ {a: "also nested"} ] // note an object in an array is also nested
let {
    getFullName,
    isPalindrome,
    getCircumfrence,
    getArea
}= require('./index')

//testing for fullName
   //positive test case

   test(`getfullName 'ajay' + 'kumar' of is ajay kumar`,()=>{
    expect(getFullName('ajay','kumar')).toBe('ajay kumar')
   })
   test(`getfullName 'ajay' + 'rajput' of is ajay rajput`,()=>{
    expect(getFullName('ajay','rajput')).toBe('ajay rajput')
   })
   test(`getfullName 'vijay' + 'kumar' of is vijay kumar`,()=>{
    expect(getFullName('vijay','kumar')).toBe('vijay kumar')
   })

//  negative test case   

   test(`getfullName 'ajay' + 'kumar' of is not ajay raj`,()=>{
    expect(getFullName('ajay','kumar')).not.toBe('ajay raj')
   })
   test(`getfullName 'ajay' + 'rajput' of is not ajay rajpoot`,()=>{
    expect(getFullName('ajay','rajput')).not.toBe('ajay rajpoot')
   })
   test(`getfullName 'vijay' + 'kumar' of is not vijay raj`,()=>{
    expect(getFullName('vijay','kumar')).not.toBe('vijay raj')
   })

    //testing for isPalindrom
// positive test cases
test(`  reviver is palindrom`,()=>{
    expect(isPalindrome('reviver')).toBeTruthy();
})
test(`level is palindrom`,()=>{
    expect(isPalindrome('level')).toBeTruthy();
})
test(`radar is palindrom`,()=>{
    expect(isPalindrome('radar')).toBeTruthy();
})
// negative test cases
test(`ajay is not  palindrom`,()=>{
    expect(isPalindrome('asvindra')).not.toBeTruthy();
})
test(`sam is not palindrom`,()=>{
    expect(isPalindrome('sam')).not.toBeTruthy();
})
test(`ram is not palindrom`,()=>{
    expect(isPalindrome('ram')).not.toBeTruthy();
})

// getCircumfrence testing

//positive test cases
test(`circumference is 12.56`,()=>{
    expect(getCircumfrence(2)).toBe("This is 12.56");
})
test(`circumference is 18.84`,()=>{
    expect(getCircumfrence(3)).toBe("This is 18.84");
})
test(`circumference is 25.12`,()=>{
    expect(getCircumfrence(4)).toBe("This is 25.12");
})

//negative test cases
test(`circumference is not 12.56`,()=>{
    expect(getCircumfrence(2)).not.toBe("The circumference is 12.5");
})
test(`circumference is not 18.84`,()=>{
    expect(getCircumfrence(3)).not.toBe("The circumference is 18.8");
})
test(`circumference is not 25.12`,()=>{
    expect(getCircumfrence(4)).not.toBe("The circumference is 25.1");
})


// testing getArea 
//positive test cases
test(`Area is 12.56`,()=>{
    expect(getArea(2)).toBe("This is 12.56");
})
test(`Area is 28.26`,()=>{
    expect(getArea(3)).toBe("This is 28.26");
})
test(`Area is 50.24`,()=>{
    expect(getArea(4)).toBe("This is 50.24");
})
// negative test cases
test(`Area is not 12.56`,()=>{
    expect(getArea(2)).not.toBe("This is not 12.5");
})
test(`Area is not 28.26`,()=>{
    expect(getArea(3)).not.toBe("The area is not 28.2");
})
test(`Area is not 50.24`,()=>{
    expect(getArea(4)).not.toBe("The area is not  50.2");
})
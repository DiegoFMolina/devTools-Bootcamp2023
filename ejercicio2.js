function createPhoneNumber(numbers){
    let format = "(qqq) qqq-qqqq";
    
    for(let i = 0; i < numbers.length; i++)
    {
      format = format.replace('q', numbers[i]);
    }
    console.log(format);
    return format;
  }

  createPhoneNumber([3,1,1,2,3,2,3,5,0,3])
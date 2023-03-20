/*    Callback to Promise

Below you will final a collection of functions and example using callback pattern. Convert the function using callback pattern to use promise. Also convert the example. */

1.
/*
function timeout(cb,ms) {
  setTimeout(cb, ms);
}

timeout(() => console.log('Hello WOrld!'), 2000);
timeout(() => console.log('Hey'), 1000);  */

// Using Promise
function timeout(cb, ms) {
    return new Promise((res, rej) => {
        res()
    }).then(()=>setTimeout(cb,ms))
}

timeout(() => console.log('Hello WOrld!'), 2000);
timeout(() => console.log('Hey'), 1000);





2.
/*
function logMsg(msg) {
  setTimeout(() => {
    console.log(msg);
  }, 2000);
}

logMsg(`Hello World!`);
logMsg(`Hey JS!`);  */

// Using Promise

function logMsg(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, 2000);
    }).then((value) => console.log(value))

}

logMsg(`Hello World!`)
logMsg(`Hey JS!`);

3.
/*
function getData(url, onSuccess, onError) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET',url);
  xhr.onload = () => onSuccess(xhr.response);
  xhr.onerror = () => onError(xhr.response);
  xhr.send();
}

getData(
  'https://api.github.com/users/getify',
  (res) => console.log(res),
  (error) => console.error(error)
);  */

// Using Promise
function getData(url, onSuccess, onError) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = () => reject(xhr.response);
        xhr.send();
    }).then((value) => onSuccess(value)).catch((error) => onError(error))
}

getData(
    'https://api.github.com/users/getify',
    (res) => console.log(res),
    (error) => console.error(error)
);

4.
/*
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () =>
    callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

loadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js',
  (res) => console.log(res)
);   */

// Using Promise

function loadScript(src, callback) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () =>
            reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    }).then((value) => callback(value)).catch((error) => callback(error))
}

loadScript(
    'https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js',
    (res) => console.log(res)
);


5.
/*
function getName(firstName, callback) {
  setTimeout(() => {
    if (!firstName)
      return callback(
        new Error('no first name passed in!')
      );

    const fullName = `${firstName} Doe`;

    return callback(fullName);
  }, 2000);
}

getName('John', console.log);
getName(null, console.log);   */

// Using Promise

function getName(firstName, callback) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (!firstName)
                 rej(
                    new Error('no first name passed in!')
                );

            const fullName = `${firstName} Doe`;

            res(fullName);
        }, 2000);
    }).then((value)=>callback(value)).catch((error)=>callback(error))
}

getName('John', console.log);
getName(null, console.log);

6.
/*
function getCurrentTime(onSuccess, onFail) {
  return setTimeout(function () {
    var didSucceed = Math.random() >= 0.5;
    if (didSucceed) {
      var currentTime = new Date();
      onSuccess(currentTime);
    } else {
      onFail('Unknown error');
    }
  }, 2000);
}
getCurrentTime(
  function (currentTime) {
    console.log('The current time is: ' + currentTime);
  },
  function (error) {
    console.log('There was an error fetching the time');
  }
);   */

// Using Promise

function getCurrentTime(onSuccess, onFail) {
    return new Promise((res,rej)=>{
        setTimeout(function () {
            var didSucceed = Math.random() >= 0.5;
            if (didSucceed) {
              var currentTime = new Date();
              res(currentTime);
            } else {
              rej('Unknown error');
            }
          }, 2000);
    }).then((value)=>onSuccess(value)).catch((error)=>onFail(error))
  }
  getCurrentTime(
    function (currentTime) {
      console.log('The current time is: ' + currentTime);
    },
    function (error) {
      console.log('There was an error fetching the time');
    }
  );  
  
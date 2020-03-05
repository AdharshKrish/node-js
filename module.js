var publicFun = (p)=>{console.log(p)};

var templateString = (a,b)=>{
    return `This is a template application ${a+b}`;
};

// module.exports.pi = 3.1415;

// module.exports = publicFun;

// module.exports.publicFun = publicFun;
// module.exports.add = templateString;

module.exports = {
    publicFun: publicFun,
    add: templateString
}
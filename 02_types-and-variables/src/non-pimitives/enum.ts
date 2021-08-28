//TypeScript has a keyword enum that let you specify many possible values as a group where only a single item can be selected

//defining an enum can be done by providing potential keys that would automatically assign a sequential number from 0 to the first potential choice
namespace enumVariables {
	enum Weather {
		Sunny,  //0
		Cloudy, //1
		Rainy,  //2
		Snowy   //3
	}

	let today: Weather = Weather.Snowy;
	console.log(today); // prints 3
}

//it is possible to specify a value to a key to have fine-grained control. Any missing value will be the next sequence value
namespace enumVariables2 {
	enum Weather {
		Sunny = 100, //100
		Cloudy,      //101
		Rainy,       //102
		Snowy        //103
	}

	let today: Weather = Weather.Cloudy;
	console.log(today); // prints 101
}

//it is possible to skip and provide values
namespace enumVariables3 {
	enum Weather {
		Sunny = 100, //100
		Cloudy,      //101
		Rainy = 200, //200
		Snowy        //201
	}

	let today: Weather = Weather.Snowy;
	console.log(today); // prints 201
}

//enum can also support string or a mix of a string and a number
namespace enumVariables4 {
	enum Weather {
		Sunny = "Sun",    //Sun
		Cloudy = "Cloud", //Cloud
		Rainy = 200,      //200
		Snowy 			  //201
	}

	// enum can be accessed by the enum or by value
	let today: Weather = Weather.Cloudy;
	let tomorrow: Weather = 200;
	console.log("Today value", today); // Today value Cloud
	// console.log("Today key", Weather[today]); // Today key undefined
	console.log("Tommorow value", tomorrow); // Tommorow value 200
	console.log("Tommorow key", Weather[tomorrow]); // Tommorow key Rainy
}


//SOME BITWISE OPERATIONS
// x = 5 -> 00000101 (from right to left: 1x1 + 0x2 + 1x4)

// << -> left shift (equivalent of multiplication) -> remove most left number and add 0 to most right
// x << 3 -> from 00000101 to 00101000 -> x * 2^3 = x * 8 = 5 * 8 = 40

// >> -> right shift (equivalent of division) -> remove most right number and add 0 to most left
// x >> 2 -> from 00000101 to 00000001 -> x / 2^2 = x / 4 = 5 / 4 = 1


//in addition to number and string, enum supports bitwise values with the help of a bit shift operator
//with the pipe | you can create a variable that contains several values
namespace enumVariable5 {
	enum Weather {
			Sunny = 0,				//0000 -> 0
			Cloudy = 1 << 0,		//0001 -> 1
			Rainy = 1 << 1,			//0010 -> 2
			Snowy = 1 << 2,			//0100 -> 4
			Stormy = Cloudy | Rainy //0001 | 0010 -> 0011 -> 3
	}

	//it allows to check whether a value contains a single or an aggregate of value
	let today: Weather = Weather.Snowy | Weather.Cloudy; // Can be outside as well
	if (Weather.Rainy === (today & Weather.Rainy)) {
			console.log("Bring an umbrella");
	}

	today |= Weather.Rainy; //hold more than a single value
	today &= ~Weather.Snowy; //to remove a particular status
	console.log(today); // 3 -> 011 = Cloudy and Rainy

	//check against many values by creating a combined value in the comparison
	if (Weather.Rainy === (today & Weather.Rainy)) {
			console.log("Rainy");
	}
	if (Weather.Cloudy === (today & Weather.Cloudy)) {
			console.log("Cloudy");
	}
	if ((Weather.Cloudy & Weather.Rainy) === (today & Weather.Cloudy & Weather.Rainy)) {
			console.log("Cloudy and Rainy");
	}
}
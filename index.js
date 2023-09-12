const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200
}

const reducer = (state = initialWagonState, {type, payload}) => {
  switch (type) {
    case 'gather': {
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1
      }
    }
    case 'travel': {
      if(state.supplies >= 0) {
        return {
          ...state,
          supplies: state.supplies - (payload * 20),
          distance: state.distance + (payload * 10),
          days: state.days + payload
        }
      } else {
        return state;
      }

    }
    case 'tippedWagon': {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1
      }
    }
    case 'sell': {
      return {
        ...state,
        supplies: state.supplies - 20,
        cash: state.cash + 5
      }
    }
    case 'buy': {
      return {
        ...state,
        supplies: state.supplies + 25,
        cash: state.cash - 15
      }
    }
    case 'theft': {
      return {
        ...state,
        cash: state.cash / 2
      }
    }
    default: {
      return state;
    }
  }
}

//call the reducer
//initialise
let wagon = reducer(undefined, {});

//step 8
wagon = reducer(wagon, {type: "travel", payload: 1})

//step 9
wagon = reducer(wagon, {type: "gather"})

//step 10
wagon = reducer(wagon, {type: "tippedWagon"})

//step 11
wagon = reducer(wagon, {type: "travel", payload: 3})

//step 12 - selling
wagon = reducer(wagon, {type: 'sell'})

//step 12 - buying
wagon = reducer(wagon, {type: 'buy'})

//step 12 - theft
wagon = reducer(wagon, {type: 'theft'})
console.log(wagon);

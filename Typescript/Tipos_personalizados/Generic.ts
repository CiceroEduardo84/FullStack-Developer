/**
 * S => state
 * T => Type
 * K => key
 * V => value
 * E => element
 */

function useState<T extends string | number = string>() {
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return {
    get,
    set,
  };
}

let newState = useState<number>();
newState.get();
// newState.set("Teste");
newState.set(1234);

const barker = (state) => ({
  bark: () => console.log("Woof, I am " + state.name),
});

const driver = (state) => ({
  drive: () => (state.position = state.position + state.speed),
});

const killer = (state) => ({
  killer: () => (state.live = state.live - 1),
});

barker({ name: "Karo" }).bark();

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0,
  };
  return Object.assign({}, barker(state), driver(state), killer(state));
};

murderRobotDog("sniffles").bark();

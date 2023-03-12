const { expect } = require("chai");

let counter;
let owner, otherAccount;
describe("Counter", function () {
  async function init() {
    [owner, otherAccount] = await ethers.getSigners();
    const Counter = await ethers.getContractFactory("Counter");
      // const counter = await Counter.deploy(initVal.INIT);
    counter = await Counter.deploy(0);
    // await counter.count();
    console.log("counter:" + counter.address);
  }

  before(async function () {
    await init();
  });

  // 
  it("init equal 0", async function () {

    console.log(0000)
    expect(await counter.counter()).to.equal(0)
  });

  it("add 1 equal 1", async function () {
    let tx = await counter.count();
    await tx.wait();
    expect(await counter.counter()).to.equal(1);
  });

  it("count_with_revert", async function () {
    // let counter2 = counter.connect(otherAccount);
    console.log(owner)
    console.log(otherAccount)
    
    // expect(counter2.count()).to.be.revertedWith("invalid call");
  });

});

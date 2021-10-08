import { greeter } from "./helper"

describe("helper",()=>{
  it("accept non empty string", ()=>{
    const test = "test"
    expect(greeter(test)).toContain(test);
  })
})
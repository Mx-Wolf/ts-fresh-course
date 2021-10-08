export const greeter = (name: string | undefined)=>{
  const result = `hello, ${name || "stranger"}`;
  console.log(result);
  return result;
}
export const greeter = (name: string | undefined)=>{
  console.log(`hello, ${name || "stranger"}`);
}
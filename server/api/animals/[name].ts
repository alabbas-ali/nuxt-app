export default defineEventHandler((event) => {
    const name = event.context.params.name

    return  [{
        age:12,
        name:"caty",
        color:"balck",
        friendly:"true",
        species:"cat"
    },
    {
        age:5,
        name:"doggy",
        color:"white",
        friendly:"true",
        species: "dog"
    },
    {
        age:22,
        name:"fishy",
        color:"white",
        species: "fish"
    }].filter(animal => animal.name === name)[0]
})

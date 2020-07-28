/* Convertir objeto receta en función constructora y generar un recetario donde se pueda agregar todas las recetas:
const recipe = {
    name: "budín vegano de banana",
    ingredientList: [
        {ingredient: "harina leudante",quantity: "2 tazas"},
        {ingredient: "agua", quantity: "1/3 taza"},
        {ingredient: "azúcar", quantity: "1 taza"},
        {ingredient: "aceite", quantity: "2/3 taza"},
        {ingredient: "bananas", quantity: "2 unidades"}
    ],
    get recipeText () {
        let recipeDescription = this.ingredientList.reduce((description, ingredientItem) => description += `${ingredientItem.quantity} de ${ingredientItem.ingredient}, `, "");
        let finalDescription = recipeDescription.substr(0, recipeDescription.length - 2) + ".";
        console.log(`La receta de ${this.name} es ${finalDescription}`);
    }
}
*/

let ingredients = [        
    {ingredient: "harina leudante",quantity: "2 tazas"},
    {ingredient: "agua", quantity: "1/3 taza"},
    {ingredient: "azúcar", quantity: "1 taza"},
    {ingredient: "aceite", quantity: "2/3 taza"},
    {ingredient: "bananas", quantity: "2 unidades"}
]
//no hay forma más inteligente de hacer esto?? 
//si no, tengo que volver a asignar valores a ingredients cada vez que quiera agregar una receta

function Recipe (name, ingredients) {
    this.name = name;
    this.ingredientList = ingredients;
    this.getRecipeText = function () {
        let recipeDescription = this.ingredientList.reduce((description, ingredientItem) => description += `${ingredientItem.quantity} de ${ingredientItem.ingredient}, `, "");
        let finalDescription = recipeDescription.substr(0, recipeDescription.length - 2) + ".";
        console.log(`La receta de ${this.name} es ${finalDescription}`);
    };
}

function RecipeCatalogue (name,ingredients) {
    this.recipeList = [];
    this.addRecipe = function (name, ingredients) {
        let recipe = new Recipe (name, ingredients);
    this.recipeList.push(recipe);
    }
    this.getRecipes = function () {
        this.recipeList.forEach(element => { 
            console.log(element.getRecipeText());            
        });
    }  
};

let meriRecipes = new RecipeCatalogue ("budín de banana", ingredients);
meriRecipes.addRecipe ("budín de banana", ingredients);

ingredients = [        
    {ingredient: "harina leudante",quantity: "2 tazas"},
    {ingredient: "agua", quantity: "1/3 taza"},
    {ingredient: "azúcar", quantity: "1 taza"},
    {ingredient: "aceite", quantity: "2/3 taza"},
    {ingredient: "peras", quantity: "2 unidades"}
]
meriRecipes.addRecipe ("budín de pera", ingredients);

meriRecipes.getRecipes();





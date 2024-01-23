export interface RecipeName
{
	Namespace: string;
	Key: string;
	SourceString: string;
	LocalizedString: string;
}

export interface Description
{
	Namespace: string;
	Key: string;
	SourceString: string;
	LocalizedString: string;
}

export interface Item
{
	AssetPathName: string;
	SubPathString: string;
}

export interface IngredientTitle
{
	Namespace: string;
	Key: string;
	SourceString: string;
	LocalizedString: string;
}

export interface PossibleIngredient
{
	IsResource: boolean;
	Item: Item;
	ShouldConsumeWhole: boolean;
	Usage: number;
	ResourceType: unknown;
	Liters: number;
	NutrientInclusionFactor: number;
}

export interface MainIngredient
{
	IngredientTitle: IngredientTitle;
	IsResource: boolean;
	PossibleIngredient: PossibleIngredient[];
}

export type CookProgressMesh = Item;
export type CookProgressMeshMaterial = Item;

export interface IngredientTitle2
{
	Namespace: string;
	Key: string;
	SourceString: string;
	LocalizedString: string;
}

export interface PossibleIngredient2
{
	IsResource: boolean;
	Item: Item;
	ShouldConsumeWhole: boolean;
	Usage: number;
	ResourceType: unknown;
	Liters: number;
	NutrientInclusionFactor: number;
}

export interface OptionalIngredient
{
	IngredientTitle: IngredientTitle2;
	IsResource: boolean;
	PossibleIngredient: PossibleIngredient2[];
}

export interface ResultingFood
{
	Item: Item;
}

export interface Properties
{
	RecipeName: RecipeName;
	Description: Description;
	MainIngredients: MainIngredient[];
	OptionalIngredients: OptionalIngredient[];
	ResultingFood: ResultingFood;
	CookingTemperature: number;
	CookingTime: number;
	Utility: string[];
	Category: string[];
	CookProgressMesh: CookProgressMesh;
	CookProgressMeshMaterial: CookProgressMeshMaterial;
	CookProgressMeshMaterialSlot: number;
}

export interface IRecipe
{
	Type?: string;
	Name?: string;
	Class?: string;
	Properties?: Partial<Properties>;
}

export type Recipes = IRecipe[];

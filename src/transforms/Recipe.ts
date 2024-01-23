import type { IRecipe } from '../types/Recipes';
import { Transformable } from '../utils/Transformable';
import { isMD5 } from '../utils/functions';

export class RecipeTransform extends Transformable<IRecipe, Record<string, unknown>>
{
	constructor()
	{
		super('Recipes');
	}

	// eslint-disable-next-line class-methods-use-this
	override transform(data: IRecipe)
	{
		return {
			Name: data.Name,
			RecipeName: data.Properties?.RecipeName?.SourceString,
			Description: data.Properties?.Description?.SourceString,
			MainIngredients: data.Properties?.MainIngredients?.map((i) => (!isMD5(i.IngredientTitle.Key) ? i.IngredientTitle.Key : i.IngredientTitle.SourceString)),
			OptionalIngredients: data.Properties?.OptionalIngredients?.map((i) => (!isMD5(i.IngredientTitle.Key) ? i.IngredientTitle.Key : i.IngredientTitle.SourceString)),
			ResultingFood: data.Properties?.ResultingFood?.Item.AssetPathName,
			CookingTemperature: data.Properties?.CookingTemperature,
			CookingTime: data.Properties?.CookingTime,
			Utility: data.Properties?.Utility,
			Category: data.Properties?.Category,
		};
	}
}

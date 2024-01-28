/* eslint-disable no-underscore-dangle */
import type { AmmunationClass, ProjectileData } from '../types/AmmunationClass';
import { Transformable } from '../utils/Transformable';

const damageTargetType = ['Player', 'Animal', 'Puppet', 'Vehicle', 'BaseBuilding', 'Sentry']; // EDamageTargetType

export class AmmunationClassTransform extends Transformable<AmmunationClass, Record<string, unknown>>
{
	constructor()
	{
		super('Ammunation_Class');
	}

	// eslint-disable-next-line class-methods-use-this
	private transformProjectileData(data?: ProjectileData)
	{
		if (!data) return undefined;

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { Caption, TargetTypeMultiplier, ...rest } = data;

		const multipliers: Record<string, number> = {};
		TargetTypeMultiplier?._multipliers?.forEach((value, idx) =>
		{
			const target = damageTargetType[idx] ?? 'undefined';
			multipliers[target] = value.Multiplier ?? 0;
		});

		return {
			...rest,
			TargetTypeMultiplier: multipliers,
		};
	}

	override transform(data: AmmunationClass)
	{
		return {
			Name: data.Name,
			Outer: data.Outer,
			ExplosionDamage: data.Properties?._explosionDamage,
			ExplosionFalloff: data.Properties?._explosionFalloff,
			ExplosionForce: data.Properties?._explosionForce,
			ExplosionInnerRadius: data.Properties?._explosionInnerRadius,
			ExplosionOuterRadius: data.Properties?._explosionOuterRadius,
			HearingDamageRadius: data.Properties?._hearingDamageRadius,
			ProjectileData: this.transformProjectileData(data.Properties?.ProjectileData),
			InitialLifeSpan: data.Properties?.InitialLifeSpan,
			NoiseLoudnessOnHit: data.Properties?.NoiseLoudnessOnHit,
			MuzzleVelocity: data.Properties?._muzzleVelocity,
			BurnTime: data.Properties?._burnTime, // flare
			ShotsCount: data.Properties?.ShotsCount,
		};
	}
}

// Generated using quicktype.io

/* eslint-disable no-use-before-define */
export interface AmmunationClass
{
	Type?: string;
	Name?: string;
	Class?: string;
	Properties?: Properties;
	SuperStruct?: ClassDefaultObject;
	ClassFlags?: string;
	ClassWithin?: ClassDefaultObject;
	ClassConfigName?: ClassConfigName;
	bCooked?: boolean;
	ClassDefaultObject?: ClassDefaultObject;
	Outer?: string;
	Super?: ClassDefaultObject;
	Template?: ClassDefaultObject;
	ChildProperties?: ChildProperty[];
	FunctionFlags?: FunctionFlags;
	Children?: ClassDefaultObject[];
	FuncMap?: { [key: string]: ClassDefaultObject; };
}

export interface ChildProperty
{
	Type?: Type;
	Name?: Name;
	Flags?: Flags;
	ElementSize?: number;
	PropertyFlags?: PropertyFlags;
	Struct?: ClassDefaultObject;
	PropertyClass?: ClassDefaultObject;
}

export type Flags = 'RF_Public' | 'RF_Public | RF_LoadCompleted';

export type Name = 'EntryPoint' | 'UberGraphFrame' | 'Ak_Flare_0' | 'ParticleSystem' | 'P_ArrowTrail' | 'DefaultSceneRoot';

export interface ClassDefaultObject
{
	ObjectName?: string;
	ObjectPath?: string;
}

export type PropertyFlags = 'BlueprintVisible | BlueprintReadOnly | Parm' | 'Transient | DuplicateTransient' | 'BlueprintVisible | InstancedReference | NonTransactional';

export type Type = 'IntProperty' | 'StructProperty' | 'ObjectProperty';

export type ClassConfigName = 'Engine';

export type FunctionFlags = 'FUNC_Final | FUNC_UbergraphFunction' | 'FUNC_Event | FUNC_Protected | FUNC_BlueprintEvent';

export interface Properties
{
	SimpleConstructionScript?: ClassDefaultObject;
	_explosionDamage?: number;
	_explosionFalloff?: number;
	_explosionForce?: number;
	_hearingDamageRadius?: number;
	_explosionParticle?: ClassDefaultObject;
	_explosionAudioEvent?: ClassDefaultObject;
	_explosionCameraShakeClass?: ClassDefaultObject;
	StaticMesh?: ClassDefaultObject;
	ProjectileData?: ProjectileData;
	TrailNiagaraSystem?: ClassDefaultObject;
	_useFixedTimestep?: boolean;
	_fixedTimestep?: number;
	bCanBeDamaged?: boolean;
	InitialLifeSpan?: number;
	RootComponent?: ClassDefaultObject;
	ComponentClass?: ClassDefaultObject;
	ComponentTemplate?: ClassDefaultObject;
	VariableGuid?: string;
	InternalVariableName?: Name;
	DefaultSceneRootNode?: ClassDefaultObject;
	AddImpulseOnHit?: boolean;
	ImpactEffects?: ClassDefaultObject;
	MeshScaleMinLocal?: number;
	MeshScaleMaxLocal?: number;
	MeshScaleMin?: number;
	MeshScaleMax?: number;
	TraceScaleMultiplier?: number;
	FlyByAudioEvent?: ClassDefaultObject;
	InitialColor?: Color;
	FinalColor?: Color;
	NoiseLoudnessOnHit?: number;
	WaterSplashParticleSystem?: ClassDefaultObject;
	OverrideMaterials?: ClassDefaultObject[];
	_muzzleVelocity?: number;
	MeshScaleStartLocal?: number;
	UberGraphFunction?: ClassDefaultObject;
	UberGraphFrame?: UberGraphFrame;
	_particleSystemComponent?: ClassDefaultObject;
	_pointLightComponent?: ClassDefaultObject;
	_akFlareComponent?: ClassDefaultObject;
	_burnStart?: ClassDefaultObject;
	_burnEnd?: ClassDefaultObject;
	_burnTime?: number;
	AttachParent?: ClassDefaultObject;
	bReplicates?: boolean;
	Template?: ClassDefaultObject;
	RelativeScale3D?: RelativeLocation;
	PrimaryComponentTick?: PrimaryTick;
	SourceRadius?: number;
	SoftSourceRadius?: number;
	IntensityUnits?: string;
	AttenuationRadius?: number;
	LightFunctionMaterial?: ClassDefaultObject;
	Intensity?: number;
	LightColor?: Color;
	CastShadows?: boolean;
	InheritableComponentHandler?: ClassDefaultObject;
	_hasParachute?: boolean;
	_parachuteGravityScale?: number;
	_parachuteEffectiveBallisticCoefficient?: number;
	_parachuteParticlesScale?: RelativeLocation;
	_parachuteParticlesScaleSpeed?: number;
	ShouldForceStopWhenNoVelocity?: boolean;
	CanEverCollide?: boolean;
	ParentComponentOrVariableName?: ParentComponentOrVariableName;
	bIsParentComponentNative?: boolean;
	RootNodes?: ClassDefaultObject[];
	AllNodes?: ClassDefaultObject[];
	_alternateMashDelay?: number;
	_alternateMash?: ClassDefaultObject;
	_explosionInnerRadius?: number;
	_explosionOuterRadius?: number;
	_tempSceneComponent?: ClassDefaultObject;
	_relativeRotationSceneComponent?: ClassDefaultObject;
	Sharpness?: number;
	RelativeLocation?: RelativeLocation;
	AssetUserData?: ClassDefaultObject[];
	AttachmentSocketMountType?: ClassDefaultObject;
	GripSocketName?: GripSocketName;
	HandsCorrectionssData?: ClassDefaultObject;
	ImpulseMultiplier?: number;
	_propulsionDelay?: number;
	_propulsionParticleSystem?: ClassDefaultObject;
	ProjectileClass?: ClassDefaultObject;
	PrimaryActorTick?: PrimaryTick;
	IgnoreCallingWeaponsFiringEffects?: boolean;
	_doNotForceInitialReplication?: boolean;
	bReplicatePhysicsToAutonomousProxy?: boolean;
	ShotsCount?: number;
	MaxImpulse?: number;
}

export interface Color
{
	R?: number;
	G?: number;
	B?: number;
	A?: number;
	Hex?: Hex;
}

export type Hex = 'FF515EFF' | 'FF59573D' | 'FFFF5E51' | 'FFACC6FF' | 'FFFFC6AC' | 'FFFF0000';

export type GripSocketName = 'Grip';

export type ParentComponentOrVariableName = 'StaticMeshes';

export interface PrimaryTick
{
	bStartWithTickEnabled?: boolean;
}

export interface ProjectileData
{
	Caliber?: number;
	Weight?: number;
	MuzzleVelocity?: number;
	BallisticCoefficient?: number;
	TargetTypeMultiplier?: TargetTypeMultiplier;
	PenetrationFactor?: number;
	Caption?: Caption;
	InitialDamage?: number;
	InitialDamageInGameEvent?: number;
	ArmorPiercingFactor?: number;
	AllowGlanceOrForceBounce?: boolean;
	GlancingAngle?: number;
}

export interface Caption
{
	Namespace?: string;
	Key?: string;
	SourceString?: string;
	LocalizedString?: string;
}

export interface TargetTypeMultiplier
{
	_multipliers?: Multiplier[];
}

export interface Multiplier
{
	Multiplier?: number;
}

export interface RelativeLocation
{
	X?: number;
	Y?: number;
	Z?: number;
}

export interface UberGraphFrame
{
}

const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Follow,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Behaviors.Turret,
		C3.Behaviors.Orbit,
		C3.Behaviors.Bullet,
		C3.Behaviors.Rotate,
		C3.Behaviors.jumpthru,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Behaviors.Sin,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Turret.Acts.AddTarget,
		C3.Behaviors.Turret.Cnds.OnTargetAcquired,
		C3.Plugins.Sprite.Acts.Spawn
	];
};
self.C3_JsPropNameTable = [
	{Seguir: 0},
	{Plataforma: 0},
	{DesplazarHasta: 0},
	{Sprite: 0},
	{Sólido: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{Sprite14: 0},
	{Sprite15: 0},
	{Sprite16: 0},
	{Sprite17: 0},
	{Torreta: 0},
	{Sprite18: 0},
	{Orbitar: 0},
	{pajaro: 0},
	{Sprite20: 0},
	{Bala: 0},
	{Sprite21: 0},
	{Sprite22: 0},
	{Sprite23: 0},
	{Girar: 0},
	{SaltoATravés: 0},
	{Sprite24: 0},
	{Sprite25: 0},
	{Sprite26: 0},
	{Sprite27: 0},
	{Sprite28: 0},
	{Sprite29: 0},
	{Sprite30: 0},
	{Sprite31: 0},
	{Sprite32: 0},
	{mnmodenna: 0},
	{Sprite34: 0},
	{Sprite35: 0},
	{Teclado: 0},
	{Sprite19: 0},
	{Texto: 0},
	{Sprite33: 0},
	{Sprite36: 0},
	{Seno: 0},
	{Sprite37: 0},
	{Sprite38: 0},
	{Sprite39: 0},
	{Sprite40: 0},
	{Texto2: 0},
	{Texto3: 0},
	{vida: 0},
	{Dinero: 0},
	{reputacion: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Sprite18: class extends self.ISpriteInstance {},
	pajaro: class extends self.ISpriteInstance {},
	Sprite20: class extends self.ISpriteInstance {},
	Sprite21: class extends self.ISpriteInstance {},
	Sprite22: class extends self.ISpriteInstance {},
	Sprite23: class extends self.ISpriteInstance {},
	Sprite24: class extends self.ISpriteInstance {},
	Sprite25: class extends self.ISpriteInstance {},
	Sprite26: class extends self.ISpriteInstance {},
	Sprite27: class extends self.ISpriteInstance {},
	Sprite28: class extends self.ISpriteInstance {},
	Sprite29: class extends self.ISpriteInstance {},
	Sprite30: class extends self.ISpriteInstance {},
	Sprite31: class extends self.ISpriteInstance {},
	Sprite32: class extends self.ISpriteInstance {},
	mnmodenna: class extends self.ISpriteInstance {},
	Sprite34: class extends self.ISpriteInstance {},
	Sprite35: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Sprite19: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Sprite33: class extends self.ISpriteInstance {},
	Sprite36: class extends self.ISpriteInstance {},
	Sprite37: class extends self.ISpriteInstance {},
	Sprite38: class extends self.ISpriteInstance {},
	Sprite39: class extends self.ISpriteInstance {},
	Sprite40: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {},
	vida: class extends self.ITextInstance {}
}
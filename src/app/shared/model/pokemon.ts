export interface Pokemon {
  id: number;
  name: string;
  passive: string;
  primaryType: string;
  secondaryType?: string;
  status: 'active' | 'inactive' | 'not usable';
}

export interface UserData {
  firstName: string;
  lastName: string;
  email: String;
  password: String;
  roleId: Number;
  active: Boolean;
  verified: Boolean;
}

export interface CategoryAttributes {
  id?: string;
  label: string | undefined;
  description?: string | null;
}
export interface ClientAttributes {
  id?: string;
  name: String;
  lastName?: string | null;
  phone: number | undefined;
  email: string | undefined;
  address: string | null;
}

export interface MasterMenuAttributes {
  id: number | undefined;
  name: string | undefined;
  icon: string | undefined;
  ordering: number | undefined;
  active: boolean | undefined;
  createdAt: Date;
  updatedAt: Date;
}
export interface ProviderAttributes {
  id?: number;
  name: string | undefined;
  location: string | undefined;
}

export interface RoleAttribute {
  id: number;
  roleName?: string | null;
  active?: boolean | null;
  createdAt: Date;
  updatedAt: Date;
}
export interface MenuAccessAttributes {
  id: number;
  roleId?: number | null;
  subMenuId?: number | null;
  active: boolean;
}
export interface SubMenuAttributes {
  id: number | undefined;
  name: string | undefined;
  icon: string | undefined;
  ordering: number | undefined;
  active: boolean | undefined;
  title: string | undefined;
  isTargetSelf: boolean | undefined;
  masterMenuId: number | undefined;
  createdAt: Date;
  updatedAt: Date;
}
export interface UserAttributes {
  id?: number;
  firstName?: String | null;
  lastName?: String | null;
  email?: String | null;
  roleId?: Number | null;
  password?: String;
  verified?: Boolean;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface  ArticleAttributes {
id?:Number | null,
ArticleName?:string | null,
designation?:string | null,
categori_id?:number | null,
TVA?:number | null,
prix_unitaire?:number | null,
prix_HTTC?:number | null 
}


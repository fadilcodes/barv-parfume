import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AllPerfumesData {
  perfumes: ({
    id: UUIDString;
    name: string;
    brand: string;
    imageUrl?: string | null;
    scentFamily?: string | null;
    topNotes?: string | null;
    heartNotes?: string | null;
    baseNotes?: string | null;
    description?: string | null;
  } & Perfume_Key)[];
}

export interface CreateReviewData {
  review_insert: Review_Key;
}

export interface CreateReviewVariables {
  perfumeId: UUIDString;
  rating: number;
  reviewText?: string | null;
  isPublic: boolean;
}

export interface ListItem_Key {
  listId: UUIDString;
  perfumeId: UUIDString;
  __typename?: 'ListItem_Key';
}

export interface List_Key {
  id: UUIDString;
  __typename?: 'List_Key';
}

export interface Perfume_Key {
  id: UUIDString;
  __typename?: 'Perfume_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface UpdateUserProfileData {
  user_update?: User_Key | null;
}

export interface UpdateUserProfileVariables {
  displayName: string;
  bio?: string | null;
  photoUrl?: string | null;
}

export interface UserListsData {
  lists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    isPublic: boolean;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & List_Key)[];
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface Wearing_Key {
  id: UUIDString;
  __typename?: 'Wearing_Key';
}

interface AllPerfumesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<AllPerfumesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<AllPerfumesData, undefined>;
  operationName: string;
}
export const allPerfumesRef: AllPerfumesRef;

export function allPerfumes(): QueryPromise<AllPerfumesData, undefined>;
export function allPerfumes(dc: DataConnect): QueryPromise<AllPerfumesData, undefined>;

interface UserListsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<UserListsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<UserListsData, undefined>;
  operationName: string;
}
export const userListsRef: UserListsRef;

export function userLists(): QueryPromise<UserListsData, undefined>;
export function userLists(dc: DataConnect): QueryPromise<UserListsData, undefined>;

interface CreateReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
  operationName: string;
}
export const createReviewRef: CreateReviewRef;

export function createReview(vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;
export function createReview(dc: DataConnect, vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface UpdateUserProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserProfileVariables): MutationRef<UpdateUserProfileData, UpdateUserProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserProfileVariables): MutationRef<UpdateUserProfileData, UpdateUserProfileVariables>;
  operationName: string;
}
export const updateUserProfileRef: UpdateUserProfileRef;

export function updateUserProfile(vars: UpdateUserProfileVariables): MutationPromise<UpdateUserProfileData, UpdateUserProfileVariables>;
export function updateUserProfile(dc: DataConnect, vars: UpdateUserProfileVariables): MutationPromise<UpdateUserProfileData, UpdateUserProfileVariables>;


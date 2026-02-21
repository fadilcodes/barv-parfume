import { AllPerfumesData, UserListsData, CreateReviewData, CreateReviewVariables, UpdateUserProfileData, UpdateUserProfileVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAllPerfumes(options?: useDataConnectQueryOptions<AllPerfumesData>): UseDataConnectQueryResult<AllPerfumesData, undefined>;
export function useAllPerfumes(dc: DataConnect, options?: useDataConnectQueryOptions<AllPerfumesData>): UseDataConnectQueryResult<AllPerfumesData, undefined>;

export function useUserLists(options?: useDataConnectQueryOptions<UserListsData>): UseDataConnectQueryResult<UserListsData, undefined>;
export function useUserLists(dc: DataConnect, options?: useDataConnectQueryOptions<UserListsData>): UseDataConnectQueryResult<UserListsData, undefined>;

export function useCreateReview(options?: useDataConnectMutationOptions<CreateReviewData, FirebaseError, CreateReviewVariables>): UseDataConnectMutationResult<CreateReviewData, CreateReviewVariables>;
export function useCreateReview(dc: DataConnect, options?: useDataConnectMutationOptions<CreateReviewData, FirebaseError, CreateReviewVariables>): UseDataConnectMutationResult<CreateReviewData, CreateReviewVariables>;

export function useUpdateUserProfile(options?: useDataConnectMutationOptions<UpdateUserProfileData, FirebaseError, UpdateUserProfileVariables>): UseDataConnectMutationResult<UpdateUserProfileData, UpdateUserProfileVariables>;
export function useUpdateUserProfile(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserProfileData, FirebaseError, UpdateUserProfileVariables>): UseDataConnectMutationResult<UpdateUserProfileData, UpdateUserProfileVariables>;

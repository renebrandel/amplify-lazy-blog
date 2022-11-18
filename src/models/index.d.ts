import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly comments: AsyncCollection<Comment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly replies?: (Reply | null)[] | null;
  readonly post?: Post | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly replies: AsyncCollection<Reply>;
  readonly post: AsyncItem<Post | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerReply = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reply, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly comment?: Comment | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentRepliesId?: string | null;
}

type LazyReply = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reply, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly comment: AsyncItem<Comment | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentRepliesId?: string | null;
}

export declare type Reply = LazyLoading extends LazyLoadingDisabled ? EagerReply : LazyReply

export declare const Reply: (new (init: ModelInit<Reply>) => Reply) & {
  copyOf(source: Reply, mutator: (draft: MutableModel<Reply>) => MutableModel<Reply> | void): Reply;
}
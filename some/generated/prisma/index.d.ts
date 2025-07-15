
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PrayerRequest
 * 
 */
export type PrayerRequest = $Result.DefaultSelection<Prisma.$PrayerRequestPayload>
/**
 * Model EmailContact
 * 
 */
export type EmailContact = $Result.DefaultSelection<Prisma.$EmailContactPayload>
/**
 * Model NewletterPost
 * 
 */
export type NewletterPost = $Result.DefaultSelection<Prisma.$NewletterPostPayload>
/**
 * Model Questions
 * 
 */
export type Questions = $Result.DefaultSelection<Prisma.$QuestionsPayload>
/**
 * Model Aboutme
 * 
 */
export type Aboutme = $Result.DefaultSelection<Prisma.$AboutmePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prayerRequest`: Exposes CRUD operations for the **PrayerRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrayerRequests
    * const prayerRequests = await prisma.prayerRequest.findMany()
    * ```
    */
  get prayerRequest(): Prisma.PrayerRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailContact`: Exposes CRUD operations for the **EmailContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailContacts
    * const emailContacts = await prisma.emailContact.findMany()
    * ```
    */
  get emailContact(): Prisma.EmailContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newletterPost`: Exposes CRUD operations for the **NewletterPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewletterPosts
    * const newletterPosts = await prisma.newletterPost.findMany()
    * ```
    */
  get newletterPost(): Prisma.NewletterPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **Questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.QuestionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aboutme`: Exposes CRUD operations for the **Aboutme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aboutmes
    * const aboutmes = await prisma.aboutme.findMany()
    * ```
    */
  get aboutme(): Prisma.AboutmeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    PrayerRequest: 'PrayerRequest',
    EmailContact: 'EmailContact',
    NewletterPost: 'NewletterPost',
    Questions: 'Questions',
    Aboutme: 'Aboutme',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "prayerRequest" | "emailContact" | "newletterPost" | "questions" | "aboutme" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PrayerRequest: {
        payload: Prisma.$PrayerRequestPayload<ExtArgs>
        fields: Prisma.PrayerRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrayerRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrayerRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerRequestPayload>
          }
          findFirst: {
            args: Prisma.PrayerRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrayerRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerRequestPayload>
          }
          findMany: {
            args: Prisma.PrayerRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerRequestPayload>[]
          }
          create: {
            args: Prisma.PrayerRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerRequestPayload>
          }
          createMany: {
            args: Prisma.PrayerRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrayerRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerRequestPayload>[]
          }
          delete: {
            args: Prisma.PrayerRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerRequestPayload>
          }
          update: {
            args: Prisma.PrayerRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerRequestPayload>
          }
          deleteMany: {
            args: Prisma.PrayerRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrayerRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrayerRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerRequestPayload>[]
          }
          upsert: {
            args: Prisma.PrayerRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerRequestPayload>
          }
          aggregate: {
            args: Prisma.PrayerRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrayerRequest>
          }
          groupBy: {
            args: Prisma.PrayerRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrayerRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrayerRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PrayerRequestCountAggregateOutputType> | number
          }
        }
      }
      EmailContact: {
        payload: Prisma.$EmailContactPayload<ExtArgs>
        fields: Prisma.EmailContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>
          }
          findFirst: {
            args: Prisma.EmailContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>
          }
          findMany: {
            args: Prisma.EmailContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>[]
          }
          create: {
            args: Prisma.EmailContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>
          }
          createMany: {
            args: Prisma.EmailContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>[]
          }
          delete: {
            args: Prisma.EmailContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>
          }
          update: {
            args: Prisma.EmailContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>
          }
          deleteMany: {
            args: Prisma.EmailContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>[]
          }
          upsert: {
            args: Prisma.EmailContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>
          }
          aggregate: {
            args: Prisma.EmailContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailContact>
          }
          groupBy: {
            args: Prisma.EmailContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailContactCountArgs<ExtArgs>
            result: $Utils.Optional<EmailContactCountAggregateOutputType> | number
          }
        }
      }
      NewletterPost: {
        payload: Prisma.$NewletterPostPayload<ExtArgs>
        fields: Prisma.NewletterPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewletterPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewletterPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewletterPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewletterPostPayload>
          }
          findFirst: {
            args: Prisma.NewletterPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewletterPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewletterPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewletterPostPayload>
          }
          findMany: {
            args: Prisma.NewletterPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewletterPostPayload>[]
          }
          create: {
            args: Prisma.NewletterPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewletterPostPayload>
          }
          createMany: {
            args: Prisma.NewletterPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewletterPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewletterPostPayload>[]
          }
          delete: {
            args: Prisma.NewletterPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewletterPostPayload>
          }
          update: {
            args: Prisma.NewletterPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewletterPostPayload>
          }
          deleteMany: {
            args: Prisma.NewletterPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewletterPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewletterPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewletterPostPayload>[]
          }
          upsert: {
            args: Prisma.NewletterPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewletterPostPayload>
          }
          aggregate: {
            args: Prisma.NewletterPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewletterPost>
          }
          groupBy: {
            args: Prisma.NewletterPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewletterPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewletterPostCountArgs<ExtArgs>
            result: $Utils.Optional<NewletterPostCountAggregateOutputType> | number
          }
        }
      }
      Questions: {
        payload: Prisma.$QuestionsPayload<ExtArgs>
        fields: Prisma.QuestionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          findFirst: {
            args: Prisma.QuestionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          findMany: {
            args: Prisma.QuestionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          create: {
            args: Prisma.QuestionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          createMany: {
            args: Prisma.QuestionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          delete: {
            args: Prisma.QuestionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          update: {
            args: Prisma.QuestionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          deleteMany: {
            args: Prisma.QuestionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          upsert: {
            args: Prisma.QuestionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.QuestionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
      Aboutme: {
        payload: Prisma.$AboutmePayload<ExtArgs>
        fields: Prisma.AboutmeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutmeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutmePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutmeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutmePayload>
          }
          findFirst: {
            args: Prisma.AboutmeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutmePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutmeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutmePayload>
          }
          findMany: {
            args: Prisma.AboutmeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutmePayload>[]
          }
          create: {
            args: Prisma.AboutmeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutmePayload>
          }
          createMany: {
            args: Prisma.AboutmeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutmeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutmePayload>[]
          }
          delete: {
            args: Prisma.AboutmeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutmePayload>
          }
          update: {
            args: Prisma.AboutmeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutmePayload>
          }
          deleteMany: {
            args: Prisma.AboutmeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutmeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutmeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutmePayload>[]
          }
          upsert: {
            args: Prisma.AboutmeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutmePayload>
          }
          aggregate: {
            args: Prisma.AboutmeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutme>
          }
          groupBy: {
            args: Prisma.AboutmeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutmeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutmeCountArgs<ExtArgs>
            result: $Utils.Optional<AboutmeCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    prayerRequest?: PrayerRequestOmit
    emailContact?: EmailContactOmit
    newletterPost?: NewletterPostOmit
    questions?: QuestionsOmit
    aboutme?: AboutmeOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    slug: string | null
    title: string | null
    content: string | null
    Status: $Enums.Status | null
    createdAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    slug: string | null
    title: string | null
    content: string | null
    Status: $Enums.Status | null
    createdAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    slug: number
    title: number
    content: number
    Status: number
    createdAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    slug?: true
    title?: true
    content?: true
    Status?: true
    createdAt?: true
  }

  export type PostMaxAggregateInputType = {
    slug?: true
    title?: true
    content?: true
    Status?: true
    createdAt?: true
  }

  export type PostCountAggregateInputType = {
    slug?: true
    title?: true
    content?: true
    Status?: true
    createdAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    slug: string
    title: string
    content: string
    Status: $Enums.Status
    createdAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    title?: boolean
    content?: boolean
    Status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    title?: boolean
    content?: boolean
    Status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    title?: boolean
    content?: boolean
    Status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    slug?: boolean
    title?: boolean
    content?: boolean
    Status?: boolean
    createdAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"slug" | "title" | "content" | "Status" | "createdAt", ExtArgs["result"]["post"]>

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      slug: string
      title: string
      content: string
      Status: $Enums.Status
      createdAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `slug`
     * const postWithSlugOnly = await prisma.post.findMany({ select: { slug: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `slug`
     * const postWithSlugOnly = await prisma.post.createManyAndReturn({
     *   select: { slug: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `slug`
     * const postWithSlugOnly = await prisma.post.updateManyAndReturn({
     *   select: { slug: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly slug: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly Status: FieldRef<"Post", 'Status'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
  }


  /**
   * Model PrayerRequest
   */

  export type AggregatePrayerRequest = {
    _count: PrayerRequestCountAggregateOutputType | null
    _avg: PrayerRequestAvgAggregateOutputType | null
    _sum: PrayerRequestSumAggregateOutputType | null
    _min: PrayerRequestMinAggregateOutputType | null
    _max: PrayerRequestMaxAggregateOutputType | null
  }

  export type PrayerRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type PrayerRequestSumAggregateOutputType = {
    id: number | null
  }

  export type PrayerRequestMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    message: string | null
  }

  export type PrayerRequestMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    message: string | null
  }

  export type PrayerRequestCountAggregateOutputType = {
    id: number
    name: number
    email: number
    message: number
    _all: number
  }


  export type PrayerRequestAvgAggregateInputType = {
    id?: true
  }

  export type PrayerRequestSumAggregateInputType = {
    id?: true
  }

  export type PrayerRequestMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
  }

  export type PrayerRequestMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
  }

  export type PrayerRequestCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    _all?: true
  }

  export type PrayerRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrayerRequest to aggregate.
     */
    where?: PrayerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrayerRequests to fetch.
     */
    orderBy?: PrayerRequestOrderByWithRelationInput | PrayerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrayerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrayerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrayerRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrayerRequests
    **/
    _count?: true | PrayerRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrayerRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrayerRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrayerRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrayerRequestMaxAggregateInputType
  }

  export type GetPrayerRequestAggregateType<T extends PrayerRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePrayerRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrayerRequest[P]>
      : GetScalarType<T[P], AggregatePrayerRequest[P]>
  }




  export type PrayerRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrayerRequestWhereInput
    orderBy?: PrayerRequestOrderByWithAggregationInput | PrayerRequestOrderByWithAggregationInput[]
    by: PrayerRequestScalarFieldEnum[] | PrayerRequestScalarFieldEnum
    having?: PrayerRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrayerRequestCountAggregateInputType | true
    _avg?: PrayerRequestAvgAggregateInputType
    _sum?: PrayerRequestSumAggregateInputType
    _min?: PrayerRequestMinAggregateInputType
    _max?: PrayerRequestMaxAggregateInputType
  }

  export type PrayerRequestGroupByOutputType = {
    id: number
    name: string
    email: string
    message: string
    _count: PrayerRequestCountAggregateOutputType | null
    _avg: PrayerRequestAvgAggregateOutputType | null
    _sum: PrayerRequestSumAggregateOutputType | null
    _min: PrayerRequestMinAggregateOutputType | null
    _max: PrayerRequestMaxAggregateOutputType | null
  }

  type GetPrayerRequestGroupByPayload<T extends PrayerRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrayerRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrayerRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrayerRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PrayerRequestGroupByOutputType[P]>
        }
      >
    >


  export type PrayerRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
  }, ExtArgs["result"]["prayerRequest"]>

  export type PrayerRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
  }, ExtArgs["result"]["prayerRequest"]>

  export type PrayerRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
  }, ExtArgs["result"]["prayerRequest"]>

  export type PrayerRequestSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
  }

  export type PrayerRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "message", ExtArgs["result"]["prayerRequest"]>

  export type $PrayerRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrayerRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      message: string
    }, ExtArgs["result"]["prayerRequest"]>
    composites: {}
  }

  type PrayerRequestGetPayload<S extends boolean | null | undefined | PrayerRequestDefaultArgs> = $Result.GetResult<Prisma.$PrayerRequestPayload, S>

  type PrayerRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrayerRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrayerRequestCountAggregateInputType | true
    }

  export interface PrayerRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrayerRequest'], meta: { name: 'PrayerRequest' } }
    /**
     * Find zero or one PrayerRequest that matches the filter.
     * @param {PrayerRequestFindUniqueArgs} args - Arguments to find a PrayerRequest
     * @example
     * // Get one PrayerRequest
     * const prayerRequest = await prisma.prayerRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrayerRequestFindUniqueArgs>(args: SelectSubset<T, PrayerRequestFindUniqueArgs<ExtArgs>>): Prisma__PrayerRequestClient<$Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrayerRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrayerRequestFindUniqueOrThrowArgs} args - Arguments to find a PrayerRequest
     * @example
     * // Get one PrayerRequest
     * const prayerRequest = await prisma.prayerRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrayerRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PrayerRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrayerRequestClient<$Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrayerRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestFindFirstArgs} args - Arguments to find a PrayerRequest
     * @example
     * // Get one PrayerRequest
     * const prayerRequest = await prisma.prayerRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrayerRequestFindFirstArgs>(args?: SelectSubset<T, PrayerRequestFindFirstArgs<ExtArgs>>): Prisma__PrayerRequestClient<$Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrayerRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestFindFirstOrThrowArgs} args - Arguments to find a PrayerRequest
     * @example
     * // Get one PrayerRequest
     * const prayerRequest = await prisma.prayerRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrayerRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PrayerRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrayerRequestClient<$Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrayerRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrayerRequests
     * const prayerRequests = await prisma.prayerRequest.findMany()
     * 
     * // Get first 10 PrayerRequests
     * const prayerRequests = await prisma.prayerRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prayerRequestWithIdOnly = await prisma.prayerRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrayerRequestFindManyArgs>(args?: SelectSubset<T, PrayerRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrayerRequest.
     * @param {PrayerRequestCreateArgs} args - Arguments to create a PrayerRequest.
     * @example
     * // Create one PrayerRequest
     * const PrayerRequest = await prisma.prayerRequest.create({
     *   data: {
     *     // ... data to create a PrayerRequest
     *   }
     * })
     * 
     */
    create<T extends PrayerRequestCreateArgs>(args: SelectSubset<T, PrayerRequestCreateArgs<ExtArgs>>): Prisma__PrayerRequestClient<$Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrayerRequests.
     * @param {PrayerRequestCreateManyArgs} args - Arguments to create many PrayerRequests.
     * @example
     * // Create many PrayerRequests
     * const prayerRequest = await prisma.prayerRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrayerRequestCreateManyArgs>(args?: SelectSubset<T, PrayerRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrayerRequests and returns the data saved in the database.
     * @param {PrayerRequestCreateManyAndReturnArgs} args - Arguments to create many PrayerRequests.
     * @example
     * // Create many PrayerRequests
     * const prayerRequest = await prisma.prayerRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrayerRequests and only return the `id`
     * const prayerRequestWithIdOnly = await prisma.prayerRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrayerRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PrayerRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrayerRequest.
     * @param {PrayerRequestDeleteArgs} args - Arguments to delete one PrayerRequest.
     * @example
     * // Delete one PrayerRequest
     * const PrayerRequest = await prisma.prayerRequest.delete({
     *   where: {
     *     // ... filter to delete one PrayerRequest
     *   }
     * })
     * 
     */
    delete<T extends PrayerRequestDeleteArgs>(args: SelectSubset<T, PrayerRequestDeleteArgs<ExtArgs>>): Prisma__PrayerRequestClient<$Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrayerRequest.
     * @param {PrayerRequestUpdateArgs} args - Arguments to update one PrayerRequest.
     * @example
     * // Update one PrayerRequest
     * const prayerRequest = await prisma.prayerRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrayerRequestUpdateArgs>(args: SelectSubset<T, PrayerRequestUpdateArgs<ExtArgs>>): Prisma__PrayerRequestClient<$Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrayerRequests.
     * @param {PrayerRequestDeleteManyArgs} args - Arguments to filter PrayerRequests to delete.
     * @example
     * // Delete a few PrayerRequests
     * const { count } = await prisma.prayerRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrayerRequestDeleteManyArgs>(args?: SelectSubset<T, PrayerRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrayerRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrayerRequests
     * const prayerRequest = await prisma.prayerRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrayerRequestUpdateManyArgs>(args: SelectSubset<T, PrayerRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrayerRequests and returns the data updated in the database.
     * @param {PrayerRequestUpdateManyAndReturnArgs} args - Arguments to update many PrayerRequests.
     * @example
     * // Update many PrayerRequests
     * const prayerRequest = await prisma.prayerRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrayerRequests and only return the `id`
     * const prayerRequestWithIdOnly = await prisma.prayerRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrayerRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PrayerRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrayerRequest.
     * @param {PrayerRequestUpsertArgs} args - Arguments to update or create a PrayerRequest.
     * @example
     * // Update or create a PrayerRequest
     * const prayerRequest = await prisma.prayerRequest.upsert({
     *   create: {
     *     // ... data to create a PrayerRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrayerRequest we want to update
     *   }
     * })
     */
    upsert<T extends PrayerRequestUpsertArgs>(args: SelectSubset<T, PrayerRequestUpsertArgs<ExtArgs>>): Prisma__PrayerRequestClient<$Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrayerRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestCountArgs} args - Arguments to filter PrayerRequests to count.
     * @example
     * // Count the number of PrayerRequests
     * const count = await prisma.prayerRequest.count({
     *   where: {
     *     // ... the filter for the PrayerRequests we want to count
     *   }
     * })
    **/
    count<T extends PrayerRequestCountArgs>(
      args?: Subset<T, PrayerRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrayerRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrayerRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrayerRequestAggregateArgs>(args: Subset<T, PrayerRequestAggregateArgs>): Prisma.PrismaPromise<GetPrayerRequestAggregateType<T>>

    /**
     * Group by PrayerRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrayerRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrayerRequestGroupByArgs['orderBy'] }
        : { orderBy?: PrayerRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrayerRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrayerRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrayerRequest model
   */
  readonly fields: PrayerRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrayerRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrayerRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PrayerRequest model
   */
  interface PrayerRequestFieldRefs {
    readonly id: FieldRef<"PrayerRequest", 'Int'>
    readonly name: FieldRef<"PrayerRequest", 'String'>
    readonly email: FieldRef<"PrayerRequest", 'String'>
    readonly message: FieldRef<"PrayerRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PrayerRequest findUnique
   */
  export type PrayerRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: PrayerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: PrayerRequestOmit<ExtArgs> | null
    /**
     * Filter, which PrayerRequest to fetch.
     */
    where: PrayerRequestWhereUniqueInput
  }

  /**
   * PrayerRequest findUniqueOrThrow
   */
  export type PrayerRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: PrayerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: PrayerRequestOmit<ExtArgs> | null
    /**
     * Filter, which PrayerRequest to fetch.
     */
    where: PrayerRequestWhereUniqueInput
  }

  /**
   * PrayerRequest findFirst
   */
  export type PrayerRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: PrayerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: PrayerRequestOmit<ExtArgs> | null
    /**
     * Filter, which PrayerRequest to fetch.
     */
    where?: PrayerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrayerRequests to fetch.
     */
    orderBy?: PrayerRequestOrderByWithRelationInput | PrayerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrayerRequests.
     */
    cursor?: PrayerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrayerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrayerRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrayerRequests.
     */
    distinct?: PrayerRequestScalarFieldEnum | PrayerRequestScalarFieldEnum[]
  }

  /**
   * PrayerRequest findFirstOrThrow
   */
  export type PrayerRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: PrayerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: PrayerRequestOmit<ExtArgs> | null
    /**
     * Filter, which PrayerRequest to fetch.
     */
    where?: PrayerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrayerRequests to fetch.
     */
    orderBy?: PrayerRequestOrderByWithRelationInput | PrayerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrayerRequests.
     */
    cursor?: PrayerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrayerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrayerRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrayerRequests.
     */
    distinct?: PrayerRequestScalarFieldEnum | PrayerRequestScalarFieldEnum[]
  }

  /**
   * PrayerRequest findMany
   */
  export type PrayerRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: PrayerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: PrayerRequestOmit<ExtArgs> | null
    /**
     * Filter, which PrayerRequests to fetch.
     */
    where?: PrayerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrayerRequests to fetch.
     */
    orderBy?: PrayerRequestOrderByWithRelationInput | PrayerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrayerRequests.
     */
    cursor?: PrayerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrayerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrayerRequests.
     */
    skip?: number
    distinct?: PrayerRequestScalarFieldEnum | PrayerRequestScalarFieldEnum[]
  }

  /**
   * PrayerRequest create
   */
  export type PrayerRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: PrayerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: PrayerRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a PrayerRequest.
     */
    data: XOR<PrayerRequestCreateInput, PrayerRequestUncheckedCreateInput>
  }

  /**
   * PrayerRequest createMany
   */
  export type PrayerRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrayerRequests.
     */
    data: PrayerRequestCreateManyInput | PrayerRequestCreateManyInput[]
  }

  /**
   * PrayerRequest createManyAndReturn
   */
  export type PrayerRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: PrayerRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: PrayerRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PrayerRequests.
     */
    data: PrayerRequestCreateManyInput | PrayerRequestCreateManyInput[]
  }

  /**
   * PrayerRequest update
   */
  export type PrayerRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: PrayerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: PrayerRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a PrayerRequest.
     */
    data: XOR<PrayerRequestUpdateInput, PrayerRequestUncheckedUpdateInput>
    /**
     * Choose, which PrayerRequest to update.
     */
    where: PrayerRequestWhereUniqueInput
  }

  /**
   * PrayerRequest updateMany
   */
  export type PrayerRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrayerRequests.
     */
    data: XOR<PrayerRequestUpdateManyMutationInput, PrayerRequestUncheckedUpdateManyInput>
    /**
     * Filter which PrayerRequests to update
     */
    where?: PrayerRequestWhereInput
    /**
     * Limit how many PrayerRequests to update.
     */
    limit?: number
  }

  /**
   * PrayerRequest updateManyAndReturn
   */
  export type PrayerRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: PrayerRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: PrayerRequestOmit<ExtArgs> | null
    /**
     * The data used to update PrayerRequests.
     */
    data: XOR<PrayerRequestUpdateManyMutationInput, PrayerRequestUncheckedUpdateManyInput>
    /**
     * Filter which PrayerRequests to update
     */
    where?: PrayerRequestWhereInput
    /**
     * Limit how many PrayerRequests to update.
     */
    limit?: number
  }

  /**
   * PrayerRequest upsert
   */
  export type PrayerRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: PrayerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: PrayerRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the PrayerRequest to update in case it exists.
     */
    where: PrayerRequestWhereUniqueInput
    /**
     * In case the PrayerRequest found by the `where` argument doesn't exist, create a new PrayerRequest with this data.
     */
    create: XOR<PrayerRequestCreateInput, PrayerRequestUncheckedCreateInput>
    /**
     * In case the PrayerRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrayerRequestUpdateInput, PrayerRequestUncheckedUpdateInput>
  }

  /**
   * PrayerRequest delete
   */
  export type PrayerRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: PrayerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: PrayerRequestOmit<ExtArgs> | null
    /**
     * Filter which PrayerRequest to delete.
     */
    where: PrayerRequestWhereUniqueInput
  }

  /**
   * PrayerRequest deleteMany
   */
  export type PrayerRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrayerRequests to delete
     */
    where?: PrayerRequestWhereInput
    /**
     * Limit how many PrayerRequests to delete.
     */
    limit?: number
  }

  /**
   * PrayerRequest without action
   */
  export type PrayerRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: PrayerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: PrayerRequestOmit<ExtArgs> | null
  }


  /**
   * Model EmailContact
   */

  export type AggregateEmailContact = {
    _count: EmailContactCountAggregateOutputType | null
    _avg: EmailContactAvgAggregateOutputType | null
    _sum: EmailContactSumAggregateOutputType | null
    _min: EmailContactMinAggregateOutputType | null
    _max: EmailContactMaxAggregateOutputType | null
  }

  export type EmailContactAvgAggregateOutputType = {
    id: number | null
  }

  export type EmailContactSumAggregateOutputType = {
    id: number | null
  }

  export type EmailContactMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    is_subscriber: boolean | null
  }

  export type EmailContactMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    is_subscriber: boolean | null
  }

  export type EmailContactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    is_subscriber: number
    _all: number
  }


  export type EmailContactAvgAggregateInputType = {
    id?: true
  }

  export type EmailContactSumAggregateInputType = {
    id?: true
  }

  export type EmailContactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    is_subscriber?: true
  }

  export type EmailContactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    is_subscriber?: true
  }

  export type EmailContactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    is_subscriber?: true
    _all?: true
  }

  export type EmailContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailContact to aggregate.
     */
    where?: EmailContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailContacts to fetch.
     */
    orderBy?: EmailContactOrderByWithRelationInput | EmailContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailContacts
    **/
    _count?: true | EmailContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailContactMaxAggregateInputType
  }

  export type GetEmailContactAggregateType<T extends EmailContactAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailContact[P]>
      : GetScalarType<T[P], AggregateEmailContact[P]>
  }




  export type EmailContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailContactWhereInput
    orderBy?: EmailContactOrderByWithAggregationInput | EmailContactOrderByWithAggregationInput[]
    by: EmailContactScalarFieldEnum[] | EmailContactScalarFieldEnum
    having?: EmailContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailContactCountAggregateInputType | true
    _avg?: EmailContactAvgAggregateInputType
    _sum?: EmailContactSumAggregateInputType
    _min?: EmailContactMinAggregateInputType
    _max?: EmailContactMaxAggregateInputType
  }

  export type EmailContactGroupByOutputType = {
    id: number
    name: string
    email: string
    is_subscriber: boolean
    _count: EmailContactCountAggregateOutputType | null
    _avg: EmailContactAvgAggregateOutputType | null
    _sum: EmailContactSumAggregateOutputType | null
    _min: EmailContactMinAggregateOutputType | null
    _max: EmailContactMaxAggregateOutputType | null
  }

  type GetEmailContactGroupByPayload<T extends EmailContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailContactGroupByOutputType[P]>
            : GetScalarType<T[P], EmailContactGroupByOutputType[P]>
        }
      >
    >


  export type EmailContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    is_subscriber?: boolean
  }, ExtArgs["result"]["emailContact"]>

  export type EmailContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    is_subscriber?: boolean
  }, ExtArgs["result"]["emailContact"]>

  export type EmailContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    is_subscriber?: boolean
  }, ExtArgs["result"]["emailContact"]>

  export type EmailContactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    is_subscriber?: boolean
  }

  export type EmailContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "is_subscriber", ExtArgs["result"]["emailContact"]>

  export type $EmailContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailContact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      is_subscriber: boolean
    }, ExtArgs["result"]["emailContact"]>
    composites: {}
  }

  type EmailContactGetPayload<S extends boolean | null | undefined | EmailContactDefaultArgs> = $Result.GetResult<Prisma.$EmailContactPayload, S>

  type EmailContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailContactCountAggregateInputType | true
    }

  export interface EmailContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailContact'], meta: { name: 'EmailContact' } }
    /**
     * Find zero or one EmailContact that matches the filter.
     * @param {EmailContactFindUniqueArgs} args - Arguments to find a EmailContact
     * @example
     * // Get one EmailContact
     * const emailContact = await prisma.emailContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailContactFindUniqueArgs>(args: SelectSubset<T, EmailContactFindUniqueArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailContact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailContactFindUniqueOrThrowArgs} args - Arguments to find a EmailContact
     * @example
     * // Get one EmailContact
     * const emailContact = await prisma.emailContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailContactFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactFindFirstArgs} args - Arguments to find a EmailContact
     * @example
     * // Get one EmailContact
     * const emailContact = await prisma.emailContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailContactFindFirstArgs>(args?: SelectSubset<T, EmailContactFindFirstArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactFindFirstOrThrowArgs} args - Arguments to find a EmailContact
     * @example
     * // Get one EmailContact
     * const emailContact = await prisma.emailContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailContactFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailContacts
     * const emailContacts = await prisma.emailContact.findMany()
     * 
     * // Get first 10 EmailContacts
     * const emailContacts = await prisma.emailContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailContactWithIdOnly = await prisma.emailContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailContactFindManyArgs>(args?: SelectSubset<T, EmailContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailContact.
     * @param {EmailContactCreateArgs} args - Arguments to create a EmailContact.
     * @example
     * // Create one EmailContact
     * const EmailContact = await prisma.emailContact.create({
     *   data: {
     *     // ... data to create a EmailContact
     *   }
     * })
     * 
     */
    create<T extends EmailContactCreateArgs>(args: SelectSubset<T, EmailContactCreateArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailContacts.
     * @param {EmailContactCreateManyArgs} args - Arguments to create many EmailContacts.
     * @example
     * // Create many EmailContacts
     * const emailContact = await prisma.emailContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailContactCreateManyArgs>(args?: SelectSubset<T, EmailContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailContacts and returns the data saved in the database.
     * @param {EmailContactCreateManyAndReturnArgs} args - Arguments to create many EmailContacts.
     * @example
     * // Create many EmailContacts
     * const emailContact = await prisma.emailContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailContacts and only return the `id`
     * const emailContactWithIdOnly = await prisma.emailContact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailContactCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailContact.
     * @param {EmailContactDeleteArgs} args - Arguments to delete one EmailContact.
     * @example
     * // Delete one EmailContact
     * const EmailContact = await prisma.emailContact.delete({
     *   where: {
     *     // ... filter to delete one EmailContact
     *   }
     * })
     * 
     */
    delete<T extends EmailContactDeleteArgs>(args: SelectSubset<T, EmailContactDeleteArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailContact.
     * @param {EmailContactUpdateArgs} args - Arguments to update one EmailContact.
     * @example
     * // Update one EmailContact
     * const emailContact = await prisma.emailContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailContactUpdateArgs>(args: SelectSubset<T, EmailContactUpdateArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailContacts.
     * @param {EmailContactDeleteManyArgs} args - Arguments to filter EmailContacts to delete.
     * @example
     * // Delete a few EmailContacts
     * const { count } = await prisma.emailContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailContactDeleteManyArgs>(args?: SelectSubset<T, EmailContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailContacts
     * const emailContact = await prisma.emailContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailContactUpdateManyArgs>(args: SelectSubset<T, EmailContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailContacts and returns the data updated in the database.
     * @param {EmailContactUpdateManyAndReturnArgs} args - Arguments to update many EmailContacts.
     * @example
     * // Update many EmailContacts
     * const emailContact = await prisma.emailContact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailContacts and only return the `id`
     * const emailContactWithIdOnly = await prisma.emailContact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailContactUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailContact.
     * @param {EmailContactUpsertArgs} args - Arguments to update or create a EmailContact.
     * @example
     * // Update or create a EmailContact
     * const emailContact = await prisma.emailContact.upsert({
     *   create: {
     *     // ... data to create a EmailContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailContact we want to update
     *   }
     * })
     */
    upsert<T extends EmailContactUpsertArgs>(args: SelectSubset<T, EmailContactUpsertArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactCountArgs} args - Arguments to filter EmailContacts to count.
     * @example
     * // Count the number of EmailContacts
     * const count = await prisma.emailContact.count({
     *   where: {
     *     // ... the filter for the EmailContacts we want to count
     *   }
     * })
    **/
    count<T extends EmailContactCountArgs>(
      args?: Subset<T, EmailContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailContactAggregateArgs>(args: Subset<T, EmailContactAggregateArgs>): Prisma.PrismaPromise<GetEmailContactAggregateType<T>>

    /**
     * Group by EmailContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailContactGroupByArgs['orderBy'] }
        : { orderBy?: EmailContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailContact model
   */
  readonly fields: EmailContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailContact model
   */
  interface EmailContactFieldRefs {
    readonly id: FieldRef<"EmailContact", 'Int'>
    readonly name: FieldRef<"EmailContact", 'String'>
    readonly email: FieldRef<"EmailContact", 'String'>
    readonly is_subscriber: FieldRef<"EmailContact", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * EmailContact findUnique
   */
  export type EmailContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Filter, which EmailContact to fetch.
     */
    where: EmailContactWhereUniqueInput
  }

  /**
   * EmailContact findUniqueOrThrow
   */
  export type EmailContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Filter, which EmailContact to fetch.
     */
    where: EmailContactWhereUniqueInput
  }

  /**
   * EmailContact findFirst
   */
  export type EmailContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Filter, which EmailContact to fetch.
     */
    where?: EmailContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailContacts to fetch.
     */
    orderBy?: EmailContactOrderByWithRelationInput | EmailContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailContacts.
     */
    cursor?: EmailContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailContacts.
     */
    distinct?: EmailContactScalarFieldEnum | EmailContactScalarFieldEnum[]
  }

  /**
   * EmailContact findFirstOrThrow
   */
  export type EmailContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Filter, which EmailContact to fetch.
     */
    where?: EmailContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailContacts to fetch.
     */
    orderBy?: EmailContactOrderByWithRelationInput | EmailContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailContacts.
     */
    cursor?: EmailContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailContacts.
     */
    distinct?: EmailContactScalarFieldEnum | EmailContactScalarFieldEnum[]
  }

  /**
   * EmailContact findMany
   */
  export type EmailContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Filter, which EmailContacts to fetch.
     */
    where?: EmailContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailContacts to fetch.
     */
    orderBy?: EmailContactOrderByWithRelationInput | EmailContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailContacts.
     */
    cursor?: EmailContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailContacts.
     */
    skip?: number
    distinct?: EmailContactScalarFieldEnum | EmailContactScalarFieldEnum[]
  }

  /**
   * EmailContact create
   */
  export type EmailContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailContact.
     */
    data: XOR<EmailContactCreateInput, EmailContactUncheckedCreateInput>
  }

  /**
   * EmailContact createMany
   */
  export type EmailContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailContacts.
     */
    data: EmailContactCreateManyInput | EmailContactCreateManyInput[]
  }

  /**
   * EmailContact createManyAndReturn
   */
  export type EmailContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * The data used to create many EmailContacts.
     */
    data: EmailContactCreateManyInput | EmailContactCreateManyInput[]
  }

  /**
   * EmailContact update
   */
  export type EmailContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailContact.
     */
    data: XOR<EmailContactUpdateInput, EmailContactUncheckedUpdateInput>
    /**
     * Choose, which EmailContact to update.
     */
    where: EmailContactWhereUniqueInput
  }

  /**
   * EmailContact updateMany
   */
  export type EmailContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailContacts.
     */
    data: XOR<EmailContactUpdateManyMutationInput, EmailContactUncheckedUpdateManyInput>
    /**
     * Filter which EmailContacts to update
     */
    where?: EmailContactWhereInput
    /**
     * Limit how many EmailContacts to update.
     */
    limit?: number
  }

  /**
   * EmailContact updateManyAndReturn
   */
  export type EmailContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * The data used to update EmailContacts.
     */
    data: XOR<EmailContactUpdateManyMutationInput, EmailContactUncheckedUpdateManyInput>
    /**
     * Filter which EmailContacts to update
     */
    where?: EmailContactWhereInput
    /**
     * Limit how many EmailContacts to update.
     */
    limit?: number
  }

  /**
   * EmailContact upsert
   */
  export type EmailContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailContact to update in case it exists.
     */
    where: EmailContactWhereUniqueInput
    /**
     * In case the EmailContact found by the `where` argument doesn't exist, create a new EmailContact with this data.
     */
    create: XOR<EmailContactCreateInput, EmailContactUncheckedCreateInput>
    /**
     * In case the EmailContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailContactUpdateInput, EmailContactUncheckedUpdateInput>
  }

  /**
   * EmailContact delete
   */
  export type EmailContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Filter which EmailContact to delete.
     */
    where: EmailContactWhereUniqueInput
  }

  /**
   * EmailContact deleteMany
   */
  export type EmailContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailContacts to delete
     */
    where?: EmailContactWhereInput
    /**
     * Limit how many EmailContacts to delete.
     */
    limit?: number
  }

  /**
   * EmailContact without action
   */
  export type EmailContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
  }


  /**
   * Model NewletterPost
   */

  export type AggregateNewletterPost = {
    _count: NewletterPostCountAggregateOutputType | null
    _avg: NewletterPostAvgAggregateOutputType | null
    _sum: NewletterPostSumAggregateOutputType | null
    _min: NewletterPostMinAggregateOutputType | null
    _max: NewletterPostMaxAggregateOutputType | null
  }

  export type NewletterPostAvgAggregateOutputType = {
    id: number | null
  }

  export type NewletterPostSumAggregateOutputType = {
    id: number | null
  }

  export type NewletterPostMinAggregateOutputType = {
    id: number | null
    title: string | null
    status: $Enums.Status | null
    content: string | null
    createdAt: Date | null
  }

  export type NewletterPostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    status: $Enums.Status | null
    content: string | null
    createdAt: Date | null
  }

  export type NewletterPostCountAggregateOutputType = {
    id: number
    title: number
    status: number
    content: number
    createdAt: number
    _all: number
  }


  export type NewletterPostAvgAggregateInputType = {
    id?: true
  }

  export type NewletterPostSumAggregateInputType = {
    id?: true
  }

  export type NewletterPostMinAggregateInputType = {
    id?: true
    title?: true
    status?: true
    content?: true
    createdAt?: true
  }

  export type NewletterPostMaxAggregateInputType = {
    id?: true
    title?: true
    status?: true
    content?: true
    createdAt?: true
  }

  export type NewletterPostCountAggregateInputType = {
    id?: true
    title?: true
    status?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type NewletterPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewletterPost to aggregate.
     */
    where?: NewletterPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewletterPosts to fetch.
     */
    orderBy?: NewletterPostOrderByWithRelationInput | NewletterPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewletterPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewletterPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewletterPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewletterPosts
    **/
    _count?: true | NewletterPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewletterPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewletterPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewletterPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewletterPostMaxAggregateInputType
  }

  export type GetNewletterPostAggregateType<T extends NewletterPostAggregateArgs> = {
        [P in keyof T & keyof AggregateNewletterPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewletterPost[P]>
      : GetScalarType<T[P], AggregateNewletterPost[P]>
  }




  export type NewletterPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewletterPostWhereInput
    orderBy?: NewletterPostOrderByWithAggregationInput | NewletterPostOrderByWithAggregationInput[]
    by: NewletterPostScalarFieldEnum[] | NewletterPostScalarFieldEnum
    having?: NewletterPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewletterPostCountAggregateInputType | true
    _avg?: NewletterPostAvgAggregateInputType
    _sum?: NewletterPostSumAggregateInputType
    _min?: NewletterPostMinAggregateInputType
    _max?: NewletterPostMaxAggregateInputType
  }

  export type NewletterPostGroupByOutputType = {
    id: number
    title: string
    status: $Enums.Status
    content: string
    createdAt: Date
    _count: NewletterPostCountAggregateOutputType | null
    _avg: NewletterPostAvgAggregateOutputType | null
    _sum: NewletterPostSumAggregateOutputType | null
    _min: NewletterPostMinAggregateOutputType | null
    _max: NewletterPostMaxAggregateOutputType | null
  }

  type GetNewletterPostGroupByPayload<T extends NewletterPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewletterPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewletterPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewletterPostGroupByOutputType[P]>
            : GetScalarType<T[P], NewletterPostGroupByOutputType[P]>
        }
      >
    >


  export type NewletterPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newletterPost"]>

  export type NewletterPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newletterPost"]>

  export type NewletterPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newletterPost"]>

  export type NewletterPostSelectScalar = {
    id?: boolean
    title?: boolean
    status?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type NewletterPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "status" | "content" | "createdAt", ExtArgs["result"]["newletterPost"]>

  export type $NewletterPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewletterPost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      status: $Enums.Status
      content: string
      createdAt: Date
    }, ExtArgs["result"]["newletterPost"]>
    composites: {}
  }

  type NewletterPostGetPayload<S extends boolean | null | undefined | NewletterPostDefaultArgs> = $Result.GetResult<Prisma.$NewletterPostPayload, S>

  type NewletterPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewletterPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewletterPostCountAggregateInputType | true
    }

  export interface NewletterPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewletterPost'], meta: { name: 'NewletterPost' } }
    /**
     * Find zero or one NewletterPost that matches the filter.
     * @param {NewletterPostFindUniqueArgs} args - Arguments to find a NewletterPost
     * @example
     * // Get one NewletterPost
     * const newletterPost = await prisma.newletterPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewletterPostFindUniqueArgs>(args: SelectSubset<T, NewletterPostFindUniqueArgs<ExtArgs>>): Prisma__NewletterPostClient<$Result.GetResult<Prisma.$NewletterPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewletterPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewletterPostFindUniqueOrThrowArgs} args - Arguments to find a NewletterPost
     * @example
     * // Get one NewletterPost
     * const newletterPost = await prisma.newletterPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewletterPostFindUniqueOrThrowArgs>(args: SelectSubset<T, NewletterPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewletterPostClient<$Result.GetResult<Prisma.$NewletterPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewletterPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewletterPostFindFirstArgs} args - Arguments to find a NewletterPost
     * @example
     * // Get one NewletterPost
     * const newletterPost = await prisma.newletterPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewletterPostFindFirstArgs>(args?: SelectSubset<T, NewletterPostFindFirstArgs<ExtArgs>>): Prisma__NewletterPostClient<$Result.GetResult<Prisma.$NewletterPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewletterPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewletterPostFindFirstOrThrowArgs} args - Arguments to find a NewletterPost
     * @example
     * // Get one NewletterPost
     * const newletterPost = await prisma.newletterPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewletterPostFindFirstOrThrowArgs>(args?: SelectSubset<T, NewletterPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewletterPostClient<$Result.GetResult<Prisma.$NewletterPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewletterPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewletterPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewletterPosts
     * const newletterPosts = await prisma.newletterPost.findMany()
     * 
     * // Get first 10 NewletterPosts
     * const newletterPosts = await prisma.newletterPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newletterPostWithIdOnly = await prisma.newletterPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewletterPostFindManyArgs>(args?: SelectSubset<T, NewletterPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewletterPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewletterPost.
     * @param {NewletterPostCreateArgs} args - Arguments to create a NewletterPost.
     * @example
     * // Create one NewletterPost
     * const NewletterPost = await prisma.newletterPost.create({
     *   data: {
     *     // ... data to create a NewletterPost
     *   }
     * })
     * 
     */
    create<T extends NewletterPostCreateArgs>(args: SelectSubset<T, NewletterPostCreateArgs<ExtArgs>>): Prisma__NewletterPostClient<$Result.GetResult<Prisma.$NewletterPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewletterPosts.
     * @param {NewletterPostCreateManyArgs} args - Arguments to create many NewletterPosts.
     * @example
     * // Create many NewletterPosts
     * const newletterPost = await prisma.newletterPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewletterPostCreateManyArgs>(args?: SelectSubset<T, NewletterPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewletterPosts and returns the data saved in the database.
     * @param {NewletterPostCreateManyAndReturnArgs} args - Arguments to create many NewletterPosts.
     * @example
     * // Create many NewletterPosts
     * const newletterPost = await prisma.newletterPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewletterPosts and only return the `id`
     * const newletterPostWithIdOnly = await prisma.newletterPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewletterPostCreateManyAndReturnArgs>(args?: SelectSubset<T, NewletterPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewletterPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewletterPost.
     * @param {NewletterPostDeleteArgs} args - Arguments to delete one NewletterPost.
     * @example
     * // Delete one NewletterPost
     * const NewletterPost = await prisma.newletterPost.delete({
     *   where: {
     *     // ... filter to delete one NewletterPost
     *   }
     * })
     * 
     */
    delete<T extends NewletterPostDeleteArgs>(args: SelectSubset<T, NewletterPostDeleteArgs<ExtArgs>>): Prisma__NewletterPostClient<$Result.GetResult<Prisma.$NewletterPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewletterPost.
     * @param {NewletterPostUpdateArgs} args - Arguments to update one NewletterPost.
     * @example
     * // Update one NewletterPost
     * const newletterPost = await prisma.newletterPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewletterPostUpdateArgs>(args: SelectSubset<T, NewletterPostUpdateArgs<ExtArgs>>): Prisma__NewletterPostClient<$Result.GetResult<Prisma.$NewletterPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewletterPosts.
     * @param {NewletterPostDeleteManyArgs} args - Arguments to filter NewletterPosts to delete.
     * @example
     * // Delete a few NewletterPosts
     * const { count } = await prisma.newletterPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewletterPostDeleteManyArgs>(args?: SelectSubset<T, NewletterPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewletterPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewletterPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewletterPosts
     * const newletterPost = await prisma.newletterPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewletterPostUpdateManyArgs>(args: SelectSubset<T, NewletterPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewletterPosts and returns the data updated in the database.
     * @param {NewletterPostUpdateManyAndReturnArgs} args - Arguments to update many NewletterPosts.
     * @example
     * // Update many NewletterPosts
     * const newletterPost = await prisma.newletterPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewletterPosts and only return the `id`
     * const newletterPostWithIdOnly = await prisma.newletterPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewletterPostUpdateManyAndReturnArgs>(args: SelectSubset<T, NewletterPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewletterPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewletterPost.
     * @param {NewletterPostUpsertArgs} args - Arguments to update or create a NewletterPost.
     * @example
     * // Update or create a NewletterPost
     * const newletterPost = await prisma.newletterPost.upsert({
     *   create: {
     *     // ... data to create a NewletterPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewletterPost we want to update
     *   }
     * })
     */
    upsert<T extends NewletterPostUpsertArgs>(args: SelectSubset<T, NewletterPostUpsertArgs<ExtArgs>>): Prisma__NewletterPostClient<$Result.GetResult<Prisma.$NewletterPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewletterPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewletterPostCountArgs} args - Arguments to filter NewletterPosts to count.
     * @example
     * // Count the number of NewletterPosts
     * const count = await prisma.newletterPost.count({
     *   where: {
     *     // ... the filter for the NewletterPosts we want to count
     *   }
     * })
    **/
    count<T extends NewletterPostCountArgs>(
      args?: Subset<T, NewletterPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewletterPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewletterPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewletterPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewletterPostAggregateArgs>(args: Subset<T, NewletterPostAggregateArgs>): Prisma.PrismaPromise<GetNewletterPostAggregateType<T>>

    /**
     * Group by NewletterPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewletterPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewletterPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewletterPostGroupByArgs['orderBy'] }
        : { orderBy?: NewletterPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewletterPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewletterPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewletterPost model
   */
  readonly fields: NewletterPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewletterPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewletterPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewletterPost model
   */
  interface NewletterPostFieldRefs {
    readonly id: FieldRef<"NewletterPost", 'Int'>
    readonly title: FieldRef<"NewletterPost", 'String'>
    readonly status: FieldRef<"NewletterPost", 'Status'>
    readonly content: FieldRef<"NewletterPost", 'String'>
    readonly createdAt: FieldRef<"NewletterPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewletterPost findUnique
   */
  export type NewletterPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewletterPost
     */
    select?: NewletterPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewletterPost
     */
    omit?: NewletterPostOmit<ExtArgs> | null
    /**
     * Filter, which NewletterPost to fetch.
     */
    where: NewletterPostWhereUniqueInput
  }

  /**
   * NewletterPost findUniqueOrThrow
   */
  export type NewletterPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewletterPost
     */
    select?: NewletterPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewletterPost
     */
    omit?: NewletterPostOmit<ExtArgs> | null
    /**
     * Filter, which NewletterPost to fetch.
     */
    where: NewletterPostWhereUniqueInput
  }

  /**
   * NewletterPost findFirst
   */
  export type NewletterPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewletterPost
     */
    select?: NewletterPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewletterPost
     */
    omit?: NewletterPostOmit<ExtArgs> | null
    /**
     * Filter, which NewletterPost to fetch.
     */
    where?: NewletterPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewletterPosts to fetch.
     */
    orderBy?: NewletterPostOrderByWithRelationInput | NewletterPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewletterPosts.
     */
    cursor?: NewletterPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewletterPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewletterPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewletterPosts.
     */
    distinct?: NewletterPostScalarFieldEnum | NewletterPostScalarFieldEnum[]
  }

  /**
   * NewletterPost findFirstOrThrow
   */
  export type NewletterPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewletterPost
     */
    select?: NewletterPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewletterPost
     */
    omit?: NewletterPostOmit<ExtArgs> | null
    /**
     * Filter, which NewletterPost to fetch.
     */
    where?: NewletterPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewletterPosts to fetch.
     */
    orderBy?: NewletterPostOrderByWithRelationInput | NewletterPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewletterPosts.
     */
    cursor?: NewletterPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewletterPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewletterPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewletterPosts.
     */
    distinct?: NewletterPostScalarFieldEnum | NewletterPostScalarFieldEnum[]
  }

  /**
   * NewletterPost findMany
   */
  export type NewletterPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewletterPost
     */
    select?: NewletterPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewletterPost
     */
    omit?: NewletterPostOmit<ExtArgs> | null
    /**
     * Filter, which NewletterPosts to fetch.
     */
    where?: NewletterPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewletterPosts to fetch.
     */
    orderBy?: NewletterPostOrderByWithRelationInput | NewletterPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewletterPosts.
     */
    cursor?: NewletterPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewletterPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewletterPosts.
     */
    skip?: number
    distinct?: NewletterPostScalarFieldEnum | NewletterPostScalarFieldEnum[]
  }

  /**
   * NewletterPost create
   */
  export type NewletterPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewletterPost
     */
    select?: NewletterPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewletterPost
     */
    omit?: NewletterPostOmit<ExtArgs> | null
    /**
     * The data needed to create a NewletterPost.
     */
    data: XOR<NewletterPostCreateInput, NewletterPostUncheckedCreateInput>
  }

  /**
   * NewletterPost createMany
   */
  export type NewletterPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewletterPosts.
     */
    data: NewletterPostCreateManyInput | NewletterPostCreateManyInput[]
  }

  /**
   * NewletterPost createManyAndReturn
   */
  export type NewletterPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewletterPost
     */
    select?: NewletterPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewletterPost
     */
    omit?: NewletterPostOmit<ExtArgs> | null
    /**
     * The data used to create many NewletterPosts.
     */
    data: NewletterPostCreateManyInput | NewletterPostCreateManyInput[]
  }

  /**
   * NewletterPost update
   */
  export type NewletterPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewletterPost
     */
    select?: NewletterPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewletterPost
     */
    omit?: NewletterPostOmit<ExtArgs> | null
    /**
     * The data needed to update a NewletterPost.
     */
    data: XOR<NewletterPostUpdateInput, NewletterPostUncheckedUpdateInput>
    /**
     * Choose, which NewletterPost to update.
     */
    where: NewletterPostWhereUniqueInput
  }

  /**
   * NewletterPost updateMany
   */
  export type NewletterPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewletterPosts.
     */
    data: XOR<NewletterPostUpdateManyMutationInput, NewletterPostUncheckedUpdateManyInput>
    /**
     * Filter which NewletterPosts to update
     */
    where?: NewletterPostWhereInput
    /**
     * Limit how many NewletterPosts to update.
     */
    limit?: number
  }

  /**
   * NewletterPost updateManyAndReturn
   */
  export type NewletterPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewletterPost
     */
    select?: NewletterPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewletterPost
     */
    omit?: NewletterPostOmit<ExtArgs> | null
    /**
     * The data used to update NewletterPosts.
     */
    data: XOR<NewletterPostUpdateManyMutationInput, NewletterPostUncheckedUpdateManyInput>
    /**
     * Filter which NewletterPosts to update
     */
    where?: NewletterPostWhereInput
    /**
     * Limit how many NewletterPosts to update.
     */
    limit?: number
  }

  /**
   * NewletterPost upsert
   */
  export type NewletterPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewletterPost
     */
    select?: NewletterPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewletterPost
     */
    omit?: NewletterPostOmit<ExtArgs> | null
    /**
     * The filter to search for the NewletterPost to update in case it exists.
     */
    where: NewletterPostWhereUniqueInput
    /**
     * In case the NewletterPost found by the `where` argument doesn't exist, create a new NewletterPost with this data.
     */
    create: XOR<NewletterPostCreateInput, NewletterPostUncheckedCreateInput>
    /**
     * In case the NewletterPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewletterPostUpdateInput, NewletterPostUncheckedUpdateInput>
  }

  /**
   * NewletterPost delete
   */
  export type NewletterPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewletterPost
     */
    select?: NewletterPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewletterPost
     */
    omit?: NewletterPostOmit<ExtArgs> | null
    /**
     * Filter which NewletterPost to delete.
     */
    where: NewletterPostWhereUniqueInput
  }

  /**
   * NewletterPost deleteMany
   */
  export type NewletterPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewletterPosts to delete
     */
    where?: NewletterPostWhereInput
    /**
     * Limit how many NewletterPosts to delete.
     */
    limit?: number
  }

  /**
   * NewletterPost without action
   */
  export type NewletterPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewletterPost
     */
    select?: NewletterPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewletterPost
     */
    omit?: NewletterPostOmit<ExtArgs> | null
  }


  /**
   * Model Questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsAvgAggregateOutputType = {
    id: number | null
  }

  export type QuestionsSumAggregateOutputType = {
    id: number | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: number | null
    question: string | null
    createdAt: Date | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: number | null
    question: string | null
    createdAt: Date | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    question: number
    createdAt: number
    _all: number
  }


  export type QuestionsAvgAggregateInputType = {
    id?: true
  }

  export type QuestionsSumAggregateInputType = {
    id?: true
  }

  export type QuestionsMinAggregateInputType = {
    id?: true
    question?: true
    createdAt?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    question?: true
    createdAt?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    question?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to aggregate.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type QuestionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionsWhereInput
    orderBy?: QuestionsOrderByWithAggregationInput | QuestionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: QuestionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _avg?: QuestionsAvgAggregateInputType
    _sum?: QuestionsSumAggregateInputType
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: number
    question: string
    createdAt: Date
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends QuestionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type QuestionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectScalar = {
    id?: boolean
    question?: boolean
    createdAt?: boolean
  }

  export type QuestionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "createdAt", ExtArgs["result"]["questions"]>

  export type $QuestionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Questions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      createdAt: Date
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type QuestionsGetPayload<S extends boolean | null | undefined | QuestionsDefaultArgs> = $Result.GetResult<Prisma.$QuestionsPayload, S>

  type QuestionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface QuestionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Questions'], meta: { name: 'Questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {QuestionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionsFindUniqueArgs>(args: SelectSubset<T, QuestionsFindUniqueArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionsFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionsFindFirstArgs>(args?: SelectSubset<T, QuestionsFindFirstArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionsFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionsFindManyArgs>(args?: SelectSubset<T, QuestionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questions.
     * @param {QuestionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends QuestionsCreateArgs>(args: SelectSubset<T, QuestionsCreateArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionsCreateManyArgs>(args?: SelectSubset<T, QuestionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionsCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionsCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Questions.
     * @param {QuestionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends QuestionsDeleteArgs>(args: SelectSubset<T, QuestionsDeleteArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questions.
     * @param {QuestionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionsUpdateArgs>(args: SelectSubset<T, QuestionsUpdateArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionsDeleteManyArgs>(args?: SelectSubset<T, QuestionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionsUpdateManyArgs>(args: SelectSubset<T, QuestionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionsUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionsUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Questions.
     * @param {QuestionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends QuestionsUpsertArgs>(args: SelectSubset<T, QuestionsUpsertArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionsCountArgs>(
      args?: Subset<T, QuestionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionsGroupByArgs['orderBy'] }
        : { orderBy?: QuestionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Questions model
   */
  readonly fields: QuestionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Questions model
   */
  interface QuestionsFieldRefs {
    readonly id: FieldRef<"Questions", 'Int'>
    readonly question: FieldRef<"Questions", 'String'>
    readonly createdAt: FieldRef<"Questions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Questions findUnique
   */
  export type QuestionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions findUniqueOrThrow
   */
  export type QuestionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions findFirst
   */
  export type QuestionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions findFirstOrThrow
   */
  export type QuestionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions findMany
   */
  export type QuestionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions create
   */
  export type QuestionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * The data needed to create a Questions.
     */
    data: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
  }

  /**
   * Questions createMany
   */
  export type QuestionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionsCreateManyInput | QuestionsCreateManyInput[]
  }

  /**
   * Questions createManyAndReturn
   */
  export type QuestionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionsCreateManyInput | QuestionsCreateManyInput[]
  }

  /**
   * Questions update
   */
  export type QuestionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * The data needed to update a Questions.
     */
    data: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
    /**
     * Choose, which Questions to update.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions updateMany
   */
  export type QuestionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionsWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Questions updateManyAndReturn
   */
  export type QuestionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionsWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Questions upsert
   */
  export type QuestionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * The filter to search for the Questions to update in case it exists.
     */
    where: QuestionsWhereUniqueInput
    /**
     * In case the Questions found by the `where` argument doesn't exist, create a new Questions with this data.
     */
    create: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
    /**
     * In case the Questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
  }

  /**
   * Questions delete
   */
  export type QuestionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Filter which Questions to delete.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions deleteMany
   */
  export type QuestionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionsWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Questions without action
   */
  export type QuestionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
  }


  /**
   * Model Aboutme
   */

  export type AggregateAboutme = {
    _count: AboutmeCountAggregateOutputType | null
    _avg: AboutmeAvgAggregateOutputType | null
    _sum: AboutmeSumAggregateOutputType | null
    _min: AboutmeMinAggregateOutputType | null
    _max: AboutmeMaxAggregateOutputType | null
  }

  export type AboutmeAvgAggregateOutputType = {
    id: number | null
  }

  export type AboutmeSumAggregateOutputType = {
    id: number | null
  }

  export type AboutmeMinAggregateOutputType = {
    id: number | null
    name: string | null
    message: string | null
  }

  export type AboutmeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    message: string | null
  }

  export type AboutmeCountAggregateOutputType = {
    id: number
    name: number
    message: number
    _all: number
  }


  export type AboutmeAvgAggregateInputType = {
    id?: true
  }

  export type AboutmeSumAggregateInputType = {
    id?: true
  }

  export type AboutmeMinAggregateInputType = {
    id?: true
    name?: true
    message?: true
  }

  export type AboutmeMaxAggregateInputType = {
    id?: true
    name?: true
    message?: true
  }

  export type AboutmeCountAggregateInputType = {
    id?: true
    name?: true
    message?: true
    _all?: true
  }

  export type AboutmeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aboutme to aggregate.
     */
    where?: AboutmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aboutmes to fetch.
     */
    orderBy?: AboutmeOrderByWithRelationInput | AboutmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aboutmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aboutmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aboutmes
    **/
    _count?: true | AboutmeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutmeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutmeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutmeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutmeMaxAggregateInputType
  }

  export type GetAboutmeAggregateType<T extends AboutmeAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutme[P]>
      : GetScalarType<T[P], AggregateAboutme[P]>
  }




  export type AboutmeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutmeWhereInput
    orderBy?: AboutmeOrderByWithAggregationInput | AboutmeOrderByWithAggregationInput[]
    by: AboutmeScalarFieldEnum[] | AboutmeScalarFieldEnum
    having?: AboutmeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutmeCountAggregateInputType | true
    _avg?: AboutmeAvgAggregateInputType
    _sum?: AboutmeSumAggregateInputType
    _min?: AboutmeMinAggregateInputType
    _max?: AboutmeMaxAggregateInputType
  }

  export type AboutmeGroupByOutputType = {
    id: number
    name: string
    message: string
    _count: AboutmeCountAggregateOutputType | null
    _avg: AboutmeAvgAggregateOutputType | null
    _sum: AboutmeSumAggregateOutputType | null
    _min: AboutmeMinAggregateOutputType | null
    _max: AboutmeMaxAggregateOutputType | null
  }

  type GetAboutmeGroupByPayload<T extends AboutmeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutmeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutmeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutmeGroupByOutputType[P]>
            : GetScalarType<T[P], AboutmeGroupByOutputType[P]>
        }
      >
    >


  export type AboutmeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    message?: boolean
  }, ExtArgs["result"]["aboutme"]>

  export type AboutmeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    message?: boolean
  }, ExtArgs["result"]["aboutme"]>

  export type AboutmeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    message?: boolean
  }, ExtArgs["result"]["aboutme"]>

  export type AboutmeSelectScalar = {
    id?: boolean
    name?: boolean
    message?: boolean
  }

  export type AboutmeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "message", ExtArgs["result"]["aboutme"]>

  export type $AboutmePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aboutme"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      message: string
    }, ExtArgs["result"]["aboutme"]>
    composites: {}
  }

  type AboutmeGetPayload<S extends boolean | null | undefined | AboutmeDefaultArgs> = $Result.GetResult<Prisma.$AboutmePayload, S>

  type AboutmeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutmeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutmeCountAggregateInputType | true
    }

  export interface AboutmeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aboutme'], meta: { name: 'Aboutme' } }
    /**
     * Find zero or one Aboutme that matches the filter.
     * @param {AboutmeFindUniqueArgs} args - Arguments to find a Aboutme
     * @example
     * // Get one Aboutme
     * const aboutme = await prisma.aboutme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutmeFindUniqueArgs>(args: SelectSubset<T, AboutmeFindUniqueArgs<ExtArgs>>): Prisma__AboutmeClient<$Result.GetResult<Prisma.$AboutmePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aboutme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutmeFindUniqueOrThrowArgs} args - Arguments to find a Aboutme
     * @example
     * // Get one Aboutme
     * const aboutme = await prisma.aboutme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutmeFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutmeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutmeClient<$Result.GetResult<Prisma.$AboutmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aboutme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutmeFindFirstArgs} args - Arguments to find a Aboutme
     * @example
     * // Get one Aboutme
     * const aboutme = await prisma.aboutme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutmeFindFirstArgs>(args?: SelectSubset<T, AboutmeFindFirstArgs<ExtArgs>>): Prisma__AboutmeClient<$Result.GetResult<Prisma.$AboutmePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aboutme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutmeFindFirstOrThrowArgs} args - Arguments to find a Aboutme
     * @example
     * // Get one Aboutme
     * const aboutme = await prisma.aboutme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutmeFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutmeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutmeClient<$Result.GetResult<Prisma.$AboutmePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aboutmes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutmeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aboutmes
     * const aboutmes = await prisma.aboutme.findMany()
     * 
     * // Get first 10 Aboutmes
     * const aboutmes = await prisma.aboutme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutmeWithIdOnly = await prisma.aboutme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutmeFindManyArgs>(args?: SelectSubset<T, AboutmeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aboutme.
     * @param {AboutmeCreateArgs} args - Arguments to create a Aboutme.
     * @example
     * // Create one Aboutme
     * const Aboutme = await prisma.aboutme.create({
     *   data: {
     *     // ... data to create a Aboutme
     *   }
     * })
     * 
     */
    create<T extends AboutmeCreateArgs>(args: SelectSubset<T, AboutmeCreateArgs<ExtArgs>>): Prisma__AboutmeClient<$Result.GetResult<Prisma.$AboutmePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aboutmes.
     * @param {AboutmeCreateManyArgs} args - Arguments to create many Aboutmes.
     * @example
     * // Create many Aboutmes
     * const aboutme = await prisma.aboutme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutmeCreateManyArgs>(args?: SelectSubset<T, AboutmeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aboutmes and returns the data saved in the database.
     * @param {AboutmeCreateManyAndReturnArgs} args - Arguments to create many Aboutmes.
     * @example
     * // Create many Aboutmes
     * const aboutme = await prisma.aboutme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aboutmes and only return the `id`
     * const aboutmeWithIdOnly = await prisma.aboutme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutmeCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutmeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutmePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aboutme.
     * @param {AboutmeDeleteArgs} args - Arguments to delete one Aboutme.
     * @example
     * // Delete one Aboutme
     * const Aboutme = await prisma.aboutme.delete({
     *   where: {
     *     // ... filter to delete one Aboutme
     *   }
     * })
     * 
     */
    delete<T extends AboutmeDeleteArgs>(args: SelectSubset<T, AboutmeDeleteArgs<ExtArgs>>): Prisma__AboutmeClient<$Result.GetResult<Prisma.$AboutmePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aboutme.
     * @param {AboutmeUpdateArgs} args - Arguments to update one Aboutme.
     * @example
     * // Update one Aboutme
     * const aboutme = await prisma.aboutme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutmeUpdateArgs>(args: SelectSubset<T, AboutmeUpdateArgs<ExtArgs>>): Prisma__AboutmeClient<$Result.GetResult<Prisma.$AboutmePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aboutmes.
     * @param {AboutmeDeleteManyArgs} args - Arguments to filter Aboutmes to delete.
     * @example
     * // Delete a few Aboutmes
     * const { count } = await prisma.aboutme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutmeDeleteManyArgs>(args?: SelectSubset<T, AboutmeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aboutmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutmeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aboutmes
     * const aboutme = await prisma.aboutme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutmeUpdateManyArgs>(args: SelectSubset<T, AboutmeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aboutmes and returns the data updated in the database.
     * @param {AboutmeUpdateManyAndReturnArgs} args - Arguments to update many Aboutmes.
     * @example
     * // Update many Aboutmes
     * const aboutme = await prisma.aboutme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Aboutmes and only return the `id`
     * const aboutmeWithIdOnly = await prisma.aboutme.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AboutmeUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutmeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutmePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aboutme.
     * @param {AboutmeUpsertArgs} args - Arguments to update or create a Aboutme.
     * @example
     * // Update or create a Aboutme
     * const aboutme = await prisma.aboutme.upsert({
     *   create: {
     *     // ... data to create a Aboutme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aboutme we want to update
     *   }
     * })
     */
    upsert<T extends AboutmeUpsertArgs>(args: SelectSubset<T, AboutmeUpsertArgs<ExtArgs>>): Prisma__AboutmeClient<$Result.GetResult<Prisma.$AboutmePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aboutmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutmeCountArgs} args - Arguments to filter Aboutmes to count.
     * @example
     * // Count the number of Aboutmes
     * const count = await prisma.aboutme.count({
     *   where: {
     *     // ... the filter for the Aboutmes we want to count
     *   }
     * })
    **/
    count<T extends AboutmeCountArgs>(
      args?: Subset<T, AboutmeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutmeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aboutme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutmeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutmeAggregateArgs>(args: Subset<T, AboutmeAggregateArgs>): Prisma.PrismaPromise<GetAboutmeAggregateType<T>>

    /**
     * Group by Aboutme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutmeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutmeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutmeGroupByArgs['orderBy'] }
        : { orderBy?: AboutmeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutmeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutmeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aboutme model
   */
  readonly fields: AboutmeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aboutme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutmeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Aboutme model
   */
  interface AboutmeFieldRefs {
    readonly id: FieldRef<"Aboutme", 'Int'>
    readonly name: FieldRef<"Aboutme", 'String'>
    readonly message: FieldRef<"Aboutme", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Aboutme findUnique
   */
  export type AboutmeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aboutme
     */
    select?: AboutmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aboutme
     */
    omit?: AboutmeOmit<ExtArgs> | null
    /**
     * Filter, which Aboutme to fetch.
     */
    where: AboutmeWhereUniqueInput
  }

  /**
   * Aboutme findUniqueOrThrow
   */
  export type AboutmeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aboutme
     */
    select?: AboutmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aboutme
     */
    omit?: AboutmeOmit<ExtArgs> | null
    /**
     * Filter, which Aboutme to fetch.
     */
    where: AboutmeWhereUniqueInput
  }

  /**
   * Aboutme findFirst
   */
  export type AboutmeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aboutme
     */
    select?: AboutmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aboutme
     */
    omit?: AboutmeOmit<ExtArgs> | null
    /**
     * Filter, which Aboutme to fetch.
     */
    where?: AboutmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aboutmes to fetch.
     */
    orderBy?: AboutmeOrderByWithRelationInput | AboutmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aboutmes.
     */
    cursor?: AboutmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aboutmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aboutmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aboutmes.
     */
    distinct?: AboutmeScalarFieldEnum | AboutmeScalarFieldEnum[]
  }

  /**
   * Aboutme findFirstOrThrow
   */
  export type AboutmeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aboutme
     */
    select?: AboutmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aboutme
     */
    omit?: AboutmeOmit<ExtArgs> | null
    /**
     * Filter, which Aboutme to fetch.
     */
    where?: AboutmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aboutmes to fetch.
     */
    orderBy?: AboutmeOrderByWithRelationInput | AboutmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aboutmes.
     */
    cursor?: AboutmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aboutmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aboutmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aboutmes.
     */
    distinct?: AboutmeScalarFieldEnum | AboutmeScalarFieldEnum[]
  }

  /**
   * Aboutme findMany
   */
  export type AboutmeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aboutme
     */
    select?: AboutmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aboutme
     */
    omit?: AboutmeOmit<ExtArgs> | null
    /**
     * Filter, which Aboutmes to fetch.
     */
    where?: AboutmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aboutmes to fetch.
     */
    orderBy?: AboutmeOrderByWithRelationInput | AboutmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aboutmes.
     */
    cursor?: AboutmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aboutmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aboutmes.
     */
    skip?: number
    distinct?: AboutmeScalarFieldEnum | AboutmeScalarFieldEnum[]
  }

  /**
   * Aboutme create
   */
  export type AboutmeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aboutme
     */
    select?: AboutmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aboutme
     */
    omit?: AboutmeOmit<ExtArgs> | null
    /**
     * The data needed to create a Aboutme.
     */
    data: XOR<AboutmeCreateInput, AboutmeUncheckedCreateInput>
  }

  /**
   * Aboutme createMany
   */
  export type AboutmeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aboutmes.
     */
    data: AboutmeCreateManyInput | AboutmeCreateManyInput[]
  }

  /**
   * Aboutme createManyAndReturn
   */
  export type AboutmeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aboutme
     */
    select?: AboutmeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aboutme
     */
    omit?: AboutmeOmit<ExtArgs> | null
    /**
     * The data used to create many Aboutmes.
     */
    data: AboutmeCreateManyInput | AboutmeCreateManyInput[]
  }

  /**
   * Aboutme update
   */
  export type AboutmeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aboutme
     */
    select?: AboutmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aboutme
     */
    omit?: AboutmeOmit<ExtArgs> | null
    /**
     * The data needed to update a Aboutme.
     */
    data: XOR<AboutmeUpdateInput, AboutmeUncheckedUpdateInput>
    /**
     * Choose, which Aboutme to update.
     */
    where: AboutmeWhereUniqueInput
  }

  /**
   * Aboutme updateMany
   */
  export type AboutmeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aboutmes.
     */
    data: XOR<AboutmeUpdateManyMutationInput, AboutmeUncheckedUpdateManyInput>
    /**
     * Filter which Aboutmes to update
     */
    where?: AboutmeWhereInput
    /**
     * Limit how many Aboutmes to update.
     */
    limit?: number
  }

  /**
   * Aboutme updateManyAndReturn
   */
  export type AboutmeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aboutme
     */
    select?: AboutmeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aboutme
     */
    omit?: AboutmeOmit<ExtArgs> | null
    /**
     * The data used to update Aboutmes.
     */
    data: XOR<AboutmeUpdateManyMutationInput, AboutmeUncheckedUpdateManyInput>
    /**
     * Filter which Aboutmes to update
     */
    where?: AboutmeWhereInput
    /**
     * Limit how many Aboutmes to update.
     */
    limit?: number
  }

  /**
   * Aboutme upsert
   */
  export type AboutmeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aboutme
     */
    select?: AboutmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aboutme
     */
    omit?: AboutmeOmit<ExtArgs> | null
    /**
     * The filter to search for the Aboutme to update in case it exists.
     */
    where: AboutmeWhereUniqueInput
    /**
     * In case the Aboutme found by the `where` argument doesn't exist, create a new Aboutme with this data.
     */
    create: XOR<AboutmeCreateInput, AboutmeUncheckedCreateInput>
    /**
     * In case the Aboutme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutmeUpdateInput, AboutmeUncheckedUpdateInput>
  }

  /**
   * Aboutme delete
   */
  export type AboutmeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aboutme
     */
    select?: AboutmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aboutme
     */
    omit?: AboutmeOmit<ExtArgs> | null
    /**
     * Filter which Aboutme to delete.
     */
    where: AboutmeWhereUniqueInput
  }

  /**
   * Aboutme deleteMany
   */
  export type AboutmeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aboutmes to delete
     */
    where?: AboutmeWhereInput
    /**
     * Limit how many Aboutmes to delete.
     */
    limit?: number
  }

  /**
   * Aboutme without action
   */
  export type AboutmeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aboutme
     */
    select?: AboutmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aboutme
     */
    omit?: AboutmeOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    slug: 'slug',
    title: 'title',
    content: 'content',
    Status: 'Status',
    createdAt: 'createdAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PrayerRequestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    message: 'message'
  };

  export type PrayerRequestScalarFieldEnum = (typeof PrayerRequestScalarFieldEnum)[keyof typeof PrayerRequestScalarFieldEnum]


  export const EmailContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    is_subscriber: 'is_subscriber'
  };

  export type EmailContactScalarFieldEnum = (typeof EmailContactScalarFieldEnum)[keyof typeof EmailContactScalarFieldEnum]


  export const NewletterPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    status: 'status',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type NewletterPostScalarFieldEnum = (typeof NewletterPostScalarFieldEnum)[keyof typeof NewletterPostScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    question: 'question',
    createdAt: 'createdAt'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const AboutmeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    message: 'message'
  };

  export type AboutmeScalarFieldEnum = (typeof AboutmeScalarFieldEnum)[keyof typeof AboutmeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    slug?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    Status?: EnumStatusFilter<"Post"> | $Enums.Status
    createdAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type PostOrderByWithRelationInput = {
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    Status?: SortOrder
    createdAt?: SortOrder
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    slug?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    Status?: EnumStatusFilter<"Post"> | $Enums.Status
    createdAt?: DateTimeFilter<"Post"> | Date | string
  }, "slug">

  export type PostOrderByWithAggregationInput = {
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    Status?: SortOrder
    createdAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    slug?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    Status?: EnumStatusWithAggregatesFilter<"Post"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type PrayerRequestWhereInput = {
    AND?: PrayerRequestWhereInput | PrayerRequestWhereInput[]
    OR?: PrayerRequestWhereInput[]
    NOT?: PrayerRequestWhereInput | PrayerRequestWhereInput[]
    id?: IntFilter<"PrayerRequest"> | number
    name?: StringFilter<"PrayerRequest"> | string
    email?: StringFilter<"PrayerRequest"> | string
    message?: StringFilter<"PrayerRequest"> | string
  }

  export type PrayerRequestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
  }

  export type PrayerRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrayerRequestWhereInput | PrayerRequestWhereInput[]
    OR?: PrayerRequestWhereInput[]
    NOT?: PrayerRequestWhereInput | PrayerRequestWhereInput[]
    name?: StringFilter<"PrayerRequest"> | string
    email?: StringFilter<"PrayerRequest"> | string
    message?: StringFilter<"PrayerRequest"> | string
  }, "id">

  export type PrayerRequestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    _count?: PrayerRequestCountOrderByAggregateInput
    _avg?: PrayerRequestAvgOrderByAggregateInput
    _max?: PrayerRequestMaxOrderByAggregateInput
    _min?: PrayerRequestMinOrderByAggregateInput
    _sum?: PrayerRequestSumOrderByAggregateInput
  }

  export type PrayerRequestScalarWhereWithAggregatesInput = {
    AND?: PrayerRequestScalarWhereWithAggregatesInput | PrayerRequestScalarWhereWithAggregatesInput[]
    OR?: PrayerRequestScalarWhereWithAggregatesInput[]
    NOT?: PrayerRequestScalarWhereWithAggregatesInput | PrayerRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PrayerRequest"> | number
    name?: StringWithAggregatesFilter<"PrayerRequest"> | string
    email?: StringWithAggregatesFilter<"PrayerRequest"> | string
    message?: StringWithAggregatesFilter<"PrayerRequest"> | string
  }

  export type EmailContactWhereInput = {
    AND?: EmailContactWhereInput | EmailContactWhereInput[]
    OR?: EmailContactWhereInput[]
    NOT?: EmailContactWhereInput | EmailContactWhereInput[]
    id?: IntFilter<"EmailContact"> | number
    name?: StringFilter<"EmailContact"> | string
    email?: StringFilter<"EmailContact"> | string
    is_subscriber?: BoolFilter<"EmailContact"> | boolean
  }

  export type EmailContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    is_subscriber?: SortOrder
  }

  export type EmailContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmailContactWhereInput | EmailContactWhereInput[]
    OR?: EmailContactWhereInput[]
    NOT?: EmailContactWhereInput | EmailContactWhereInput[]
    name?: StringFilter<"EmailContact"> | string
    email?: StringFilter<"EmailContact"> | string
    is_subscriber?: BoolFilter<"EmailContact"> | boolean
  }, "id">

  export type EmailContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    is_subscriber?: SortOrder
    _count?: EmailContactCountOrderByAggregateInput
    _avg?: EmailContactAvgOrderByAggregateInput
    _max?: EmailContactMaxOrderByAggregateInput
    _min?: EmailContactMinOrderByAggregateInput
    _sum?: EmailContactSumOrderByAggregateInput
  }

  export type EmailContactScalarWhereWithAggregatesInput = {
    AND?: EmailContactScalarWhereWithAggregatesInput | EmailContactScalarWhereWithAggregatesInput[]
    OR?: EmailContactScalarWhereWithAggregatesInput[]
    NOT?: EmailContactScalarWhereWithAggregatesInput | EmailContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmailContact"> | number
    name?: StringWithAggregatesFilter<"EmailContact"> | string
    email?: StringWithAggregatesFilter<"EmailContact"> | string
    is_subscriber?: BoolWithAggregatesFilter<"EmailContact"> | boolean
  }

  export type NewletterPostWhereInput = {
    AND?: NewletterPostWhereInput | NewletterPostWhereInput[]
    OR?: NewletterPostWhereInput[]
    NOT?: NewletterPostWhereInput | NewletterPostWhereInput[]
    id?: IntFilter<"NewletterPost"> | number
    title?: StringFilter<"NewletterPost"> | string
    status?: EnumStatusFilter<"NewletterPost"> | $Enums.Status
    content?: StringFilter<"NewletterPost"> | string
    createdAt?: DateTimeFilter<"NewletterPost"> | Date | string
  }

  export type NewletterPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type NewletterPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NewletterPostWhereInput | NewletterPostWhereInput[]
    OR?: NewletterPostWhereInput[]
    NOT?: NewletterPostWhereInput | NewletterPostWhereInput[]
    title?: StringFilter<"NewletterPost"> | string
    status?: EnumStatusFilter<"NewletterPost"> | $Enums.Status
    content?: StringFilter<"NewletterPost"> | string
    createdAt?: DateTimeFilter<"NewletterPost"> | Date | string
  }, "id">

  export type NewletterPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: NewletterPostCountOrderByAggregateInput
    _avg?: NewletterPostAvgOrderByAggregateInput
    _max?: NewletterPostMaxOrderByAggregateInput
    _min?: NewletterPostMinOrderByAggregateInput
    _sum?: NewletterPostSumOrderByAggregateInput
  }

  export type NewletterPostScalarWhereWithAggregatesInput = {
    AND?: NewletterPostScalarWhereWithAggregatesInput | NewletterPostScalarWhereWithAggregatesInput[]
    OR?: NewletterPostScalarWhereWithAggregatesInput[]
    NOT?: NewletterPostScalarWhereWithAggregatesInput | NewletterPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewletterPost"> | number
    title?: StringWithAggregatesFilter<"NewletterPost"> | string
    status?: EnumStatusWithAggregatesFilter<"NewletterPost"> | $Enums.Status
    content?: StringWithAggregatesFilter<"NewletterPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewletterPost"> | Date | string
  }

  export type QuestionsWhereInput = {
    AND?: QuestionsWhereInput | QuestionsWhereInput[]
    OR?: QuestionsWhereInput[]
    NOT?: QuestionsWhereInput | QuestionsWhereInput[]
    id?: IntFilter<"Questions"> | number
    question?: StringFilter<"Questions"> | string
    createdAt?: DateTimeFilter<"Questions"> | Date | string
  }

  export type QuestionsOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionsWhereInput | QuestionsWhereInput[]
    OR?: QuestionsWhereInput[]
    NOT?: QuestionsWhereInput | QuestionsWhereInput[]
    question?: StringFilter<"Questions"> | string
    createdAt?: DateTimeFilter<"Questions"> | Date | string
  }, "id">

  export type QuestionsOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
    _count?: QuestionsCountOrderByAggregateInput
    _avg?: QuestionsAvgOrderByAggregateInput
    _max?: QuestionsMaxOrderByAggregateInput
    _min?: QuestionsMinOrderByAggregateInput
    _sum?: QuestionsSumOrderByAggregateInput
  }

  export type QuestionsScalarWhereWithAggregatesInput = {
    AND?: QuestionsScalarWhereWithAggregatesInput | QuestionsScalarWhereWithAggregatesInput[]
    OR?: QuestionsScalarWhereWithAggregatesInput[]
    NOT?: QuestionsScalarWhereWithAggregatesInput | QuestionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Questions"> | number
    question?: StringWithAggregatesFilter<"Questions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Questions"> | Date | string
  }

  export type AboutmeWhereInput = {
    AND?: AboutmeWhereInput | AboutmeWhereInput[]
    OR?: AboutmeWhereInput[]
    NOT?: AboutmeWhereInput | AboutmeWhereInput[]
    id?: IntFilter<"Aboutme"> | number
    name?: StringFilter<"Aboutme"> | string
    message?: StringFilter<"Aboutme"> | string
  }

  export type AboutmeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    message?: SortOrder
  }

  export type AboutmeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AboutmeWhereInput | AboutmeWhereInput[]
    OR?: AboutmeWhereInput[]
    NOT?: AboutmeWhereInput | AboutmeWhereInput[]
    name?: StringFilter<"Aboutme"> | string
    message?: StringFilter<"Aboutme"> | string
  }, "id">

  export type AboutmeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    message?: SortOrder
    _count?: AboutmeCountOrderByAggregateInput
    _avg?: AboutmeAvgOrderByAggregateInput
    _max?: AboutmeMaxOrderByAggregateInput
    _min?: AboutmeMinOrderByAggregateInput
    _sum?: AboutmeSumOrderByAggregateInput
  }

  export type AboutmeScalarWhereWithAggregatesInput = {
    AND?: AboutmeScalarWhereWithAggregatesInput | AboutmeScalarWhereWithAggregatesInput[]
    OR?: AboutmeScalarWhereWithAggregatesInput[]
    NOT?: AboutmeScalarWhereWithAggregatesInput | AboutmeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Aboutme"> | number
    name?: StringWithAggregatesFilter<"Aboutme"> | string
    message?: StringWithAggregatesFilter<"Aboutme"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PostCreateInput = {
    slug: string
    title: string
    content: string
    Status: $Enums.Status
    createdAt?: Date | string
  }

  export type PostUncheckedCreateInput = {
    slug: string
    title: string
    content: string
    Status: $Enums.Status
    createdAt?: Date | string
  }

  export type PostUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    slug: string
    title: string
    content: string
    Status: $Enums.Status
    createdAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrayerRequestCreateInput = {
    name: string
    email: string
    message: string
  }

  export type PrayerRequestUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    message: string
  }

  export type PrayerRequestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type PrayerRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type PrayerRequestCreateManyInput = {
    id?: number
    name: string
    email: string
    message: string
  }

  export type PrayerRequestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type PrayerRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type EmailContactCreateInput = {
    name: string
    email: string
    is_subscriber: boolean
  }

  export type EmailContactUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    is_subscriber: boolean
  }

  export type EmailContactUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_subscriber?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_subscriber?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailContactCreateManyInput = {
    id?: number
    name: string
    email: string
    is_subscriber: boolean
  }

  export type EmailContactUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_subscriber?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_subscriber?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NewletterPostCreateInput = {
    title: string
    status: $Enums.Status
    content: string
    createdAt?: Date | string
  }

  export type NewletterPostUncheckedCreateInput = {
    id?: number
    title: string
    status: $Enums.Status
    content: string
    createdAt?: Date | string
  }

  export type NewletterPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewletterPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewletterPostCreateManyInput = {
    id?: number
    title: string
    status: $Enums.Status
    content: string
    createdAt?: Date | string
  }

  export type NewletterPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewletterPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsCreateInput = {
    question: string
    createdAt?: Date | string
  }

  export type QuestionsUncheckedCreateInput = {
    id?: number
    question: string
    createdAt?: Date | string
  }

  export type QuestionsUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsCreateManyInput = {
    id?: number
    question: string
    createdAt?: Date | string
  }

  export type QuestionsUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutmeCreateInput = {
    name: string
    message: string
  }

  export type AboutmeUncheckedCreateInput = {
    id?: number
    name: string
    message: string
  }

  export type AboutmeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type AboutmeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type AboutmeCreateManyInput = {
    id?: number
    name: string
    message: string
  }

  export type AboutmeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type AboutmeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostCountOrderByAggregateInput = {
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    Status?: SortOrder
    createdAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    Status?: SortOrder
    createdAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    Status?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PrayerRequestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
  }

  export type PrayerRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PrayerRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
  }

  export type PrayerRequestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
  }

  export type PrayerRequestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EmailContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    is_subscriber?: SortOrder
  }

  export type EmailContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmailContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    is_subscriber?: SortOrder
  }

  export type EmailContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    is_subscriber?: SortOrder
  }

  export type EmailContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NewletterPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type NewletterPostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewletterPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type NewletterPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type NewletterPostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestionsCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestionsMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionsMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AboutmeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    message?: SortOrder
  }

  export type AboutmeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AboutmeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    message?: SortOrder
  }

  export type AboutmeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    message?: SortOrder
  }

  export type AboutmeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
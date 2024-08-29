# AIMAP.txt

## Project Overview

Hey is a decentralized, permissionless social media app built with Lens Protocol. It's a large project with a complex codebase, consisting of multiple apps and packages.

## Key Files and Folders

### Apps

- **`apps/api`**:

  - API server for Hey
  - Handles requests from the web app and other services
  - Key files:
    - `src/server.ts`: Main entry point for the API server
    - `src/routes/`: Contains all API routes
    - `src/helpers/`: Helper functions for the API

- **`apps/cron`**:

  - Cron jobs for Hey
  - Handles tasks like backing up data to S3 and processing events
  - Key files:
    - `src/index.ts`: Main entry point for cron jobs
    - `src/jobs/`: Contains individual cron job definitions

- **`apps/invoice`**:

  - Invoice generation app
  - Generates invoices for users who sign up with a credit card
  - Key files:
    - `src/app/page.tsx`: Main page for invoice generation

- **`apps/og`**:

  - Open Graph metadata generation app
  - Generates OG metadata for Hey pages
  - Key files:
    - `src/app/page.tsx`: Main page for OG image generation

- **`apps/web`**:
  - Main web app for Hey
  - Provides the user interface for the social media platform
  - Key files and components:
    - `src/pages/`: Next.js pages
    - `src/components/`: React components
    - `src/hooks/`: Custom React hooks
    - `src/store/`: State management (e.g., Zustand stores)
    - `src/styles/`: Global styles and theme
    - `src/lib/`: Utility functions and helpers

### Packages

- **`packages/abis`**:

  - Contains ABIs (Application Binary Interfaces) for all contracts used in Hey
  - Each ABI is exported as a separate file (e.g., `LensHub.ts`, `HeyTipping.ts`)

- **`packages/contracts`**:

  - Contains Solidity contracts for Hey
  - Includes contracts like `HeyLensSignup`, `HeyTipping`

- **`packages/data`**:

  - Contains constants, enums, and other shared data
  - Key files:
    - `constants.ts`: Global constants
    - `feature-flags.ts`: Feature flag definitions
    - `storage.ts`: Local storage keys

- **`packages/db`**:

  - Database-related code and utilities
  - Includes Prisma schema, migrations, and database clients

- **`packages/helpers`**:

  - Shared helper functions used across the project
  - Includes utilities for formatting, validation, and data processing

- **`packages/lens`**:

  - Lens Protocol client and related utilities
  - Contains GraphQL queries, mutations, and generated types

- **`packages/ui`**:

  - Shared UI components used across the project
  - Includes basic components like Button, Input, Card, etc.

- **`packages/image-cropper`**:
  - Image cropping component and related utilities

## Key Technologies and Tools

- **Lens Protocol**: Core protocol for social graph and content management
- **React**: UI library for building the web app
- **Next.js**: React framework for server-side rendering and routing
- **TypeScript**: Typed superset of JavaScript used throughout the project
- **GraphQL**: Query language for APIs, used with Lens Protocol
- **Prisma**: ORM for database operations
- **ClickHouse**: Analytics database for event tracking
- **Redis**: In-memory data store used for caching
- **Leafwatch**: Custom analytics and event tracking system
- **Vitest**: Testing framework
- **Vercel**: Deployment platform for the web app
- **Railway**: Deployment platform for the API server and cron jobs

## Key Concepts and Features

1. **Profiles**: User profiles managed through Lens Protocol
2. **Publications**: Posts, comments, and mirrors (reposts)
3. **Following/Followers**: Social graph management
4. **Collect/Like**: Interactions with publications
5. **Open Actions**: Customizable actions that can be performed on publications
6. **Momoka**: Data availability layer for off-chain content

## AI Programmer Instructions

- Use the `AIMAP.txt` file to understand the project structure and key files.
- Use the keywords to help you find relevant information.
- Use the `packages/lens` package to interact with the Lens Protocol.
- Use the `packages/db` package to interact with the database.
- Use the `packages/helpers` package for helper functions.
- Use the `packages/ui` package for UI components.
- Use the `packages/image-cropper` package for image cropping.
- Use the `apps/web` app for the main user interface.
- Use the `apps/api` app for the API server.
- Use the `apps/cron` app for cron jobs.
- Use the `apps/invoice` app for invoice generation.
- Use the `apps/og` app for Open Graph metadata generation.

1. **Understanding the Codebase**:

   - Start with the `apps/web` directory to understand the main user interface
   - Examine `apps/api` for backend functionality
   - Look at `packages/lens` to understand Lens Protocol integration

2. **Working with Lens Protocol**:

   - Use hooks and mutations from `packages/lens` for Lens-related operations
   - Refer to the Lens Protocol documentation for deeper understanding

3. **State Management**:

   - Check `apps/web/src/store` for Zustand stores
   - Use appropriate stores for managing global state (e.g., user profile, settings)

4. **UI Components**:

   - Utilize components from `packages/ui` for consistent design
   - Create new components in `apps/web/src/components` when needed

5. **API Integration**:

   - Use API routes defined in `apps/api/src/routes` for backend operations
   - Create new routes as needed, following the existing structure

6. **Database Operations**:

   - Use Prisma ORM for database queries (defined in `packages/db`)
   - Add new models or migrations in the Prisma schema as required

7. **Analytics and Tracking**:

   - Use Leafwatch for event tracking (see `apps/web/src/lib/leafwatch.ts`)
   - Add new events in `packages/data/tracking.ts`

8. **Testing**:

   - Write unit tests using Vitest
   - Place tests next to the files they're testing with a `.test.ts` or `.test.tsx` extension

9. **Deployment**:

   - The web app is deployed on Vercel
   - The API and cron jobs are deployed on Railway

10. **Feature Flags**:
    - Check `packages/data/feature-flags.ts` for available feature flags
    - Use these flags to conditionally enable/disable features

- **Lens Protocol:** - Use the `packages/lens` package to interact with the Lens Protocol. - Use the `useProfileQuery` hook to fetch a profile by ID or handle. - Use the `usePublicationsQuery` hook to fetch publications by profile ID or publication ID. - Use the `useSearchProfilesQuery` hook to search for profiles. - Use the `useSearchPublicationsQuery` hook to search for publications. - Use the `useCreateProfileWithHandle` mutation to create a new profile with a handle. - Use the `useFollowMutation` mutation to follow a profile. - Use the `useUnfollowMutation` mutation to unfollow a profile. - Use the `useBlockMutation` mutation to block a profile. - Use the `useUnblockMutation` mutation to unblock a profile. - Use the `useAddReactionMutation` mutation to like a publication. - Use the `useRemoveReactionMutation` mutation to unlike a publication. - Use the `useMirrorOnchainMutation` mutation to mirror a publication. - Use the `useCommentOnchainMutation` mutation to comment on a publication. - Use the `useQuoteOnchainMutation` mutation to quote a publication. - Use the `useSetProfileMetadataMutation` mutation to update a profile's metadata. - Use the `useCreateOnchainSetProfileMetadataTypedDataMutation` mutation to generate a typed data for updating a profile's metadata. - Use the `useCreateFollowTypedDataMutation` mutation to generate a typed data for following a profile. - Use the `useCreateUnfollowTypedDataMutation` mutation to generate a typed data for unfollowing a profile. - Use the `useCreateBlockProfilesTypedDataMutation` mutation to generate a typed data for blocking a profile. - Use the `useCreateUnblockProfilesTypedDataMutation` mutation to generate a typed data for unblocking a profile. - Use the `useCreateOnchainPostTypedDataMutation` mutation to generate a typed data for creating a new post. - Use the `useCreateOnchainCommentTypedDataMutation` mutation to generate a typed data for creating a new comment. - Use the `useCreateOnchainQuoteTypedDataMutation` mutation to generate a typed data for creating a new quote. - Use the `useBroadcastOnchainMutation` mutation to broadcast a signed typed data to the Lens Protocol. - Use the `useActOnOpenActionMutation` mutation to act on an open action module. - Use the `useCreateActOnOpenActionTypedDataMutation` mutation to generate a typed data for acting on an open action module. - Use the `useProfileRecommendationsQuery` hook to fetch recommended profiles. - Use the `usePublicationBookmarksQuery` hook to fetch bookmarked publications. - Use the `useWhoHaveBlockedQuery` hook to fetch profiles that have blocked the current user. - Use the `useWhoActedOnPublicationQuery` hook to fetch profiles that have acted on a publication. - Use the `useProfileManagersQuery` hook to fetch the managers of a profile. - Use the `useProfileActionHistoryQuery` hook to fetch the action history of a profile. - Use the `useLatestPaidActionsQuery` hook to fetch the latest paid actions. - Use the `useModExplorePublicationsQuery` hook to fetch publications for moderation. - Use the `useModLatestReportsQuery` hook to fetch the latest moderation reports. - Use the `useSearchProfilesLazyQuery` hook to search for profiles. - Use the `useSearchPublicationsLazyQuery` hook to search for publications. - Use the `useOwnedHandlesQuery` hook to fetch the handles owned by an address. - Use the `useFollowRevenuesQuery` hook to fetch the revenue from follows. - Use the `useApprovedModuleAllowanceAmountQuery` hook to fetch the approved allowance amount for a module. - Use the `useGenerateModuleCurrencyApprovalDataQuery` hook to generate a typed data for approving a module. - Use the `useGenerateLensAPIRelayAddressQuery` hook to generate a Lens API relay address. - Use the `useLensTransactionStatusQuery` hook to fetch the status of a Lens transaction. - Use the `useCreateFrameTypedData` query to generate a typed data for a frame. - Use the `useVerifyFrameSignature` query to verify a frame signature. - Use the `useCurrentProfileQuery` hook to fetch the current user's profile. - Use the `useDefaultProfileQuery` hook to fetch the default profile for an address. - Use the `useProfileInterestsOptionsQuery` hook to fetch the available profile interests. - Use the `useStaffPicksQuery` hook to fetch staff picks. - Use the `useNftCollectionsQuery` hook to fetch NFT collections. - Use the `useNftCollectionOwnersQuery` hook to fetch the owners of an NFT collection. - Use the `useNftOwnershipChallenge` mutation to challenge NFT ownership. - Use the `useClaimProfileWithHandle` mutation to claim a profile with a handle. - Use the `useClaimTokens` mutation to claim tokens. - Use the `useChallenge` query to fetch a challenge for authentication. - Use the `useAuthenticate` mutation to authenticate a user. - Use the `useRefresh` mutation to refresh an access token. - Use the `useWalletAuthenticationToProfileAuthentication` mutation to convert a wallet authentication to a profile authentication. - Use the `useBroadcastOnMomoka` mutation to broadcast a signed typed data to Momoka. - Use the `useCommentOnMomoka` mutation to comment on a publication using Momoka. - Use the `useMirrorOnMomoka` mutation to mirror a publication using Momoka. - Use the `usePostOnMomoka` mutation to create a new post using Momoka. - Use the `useQuoteOnMomoka` mutation to quote a publication using Momoka. - Use the `useMomokaTransaction` query to fetch a Momoka transaction. - Use the `useMomokaTransactions` query to fetch Momoka transactions. - Use the `useMomokaSubmitters` query to fetch Momoka submitters. - Use the `useMomokaSummary` query to fetch Momoka summary. - Use the `useCreateMomokaCommentTypedData` mutation to generate a typed data for creating a new comment using Momoka. - Use the `useCreateMomokaMirrorTypedData` mutation to generate a typed data for mirroring a publication using Momoka. - Use the `useCreateMomokaPostTypedData` mutation to generate a typed data for creating a new post using Momoka. - Use the `useCreateMomokaQuoteTypedData` mutation to generate a typed data for quoting a publication using Momoka. - Use the `useBroadcastOnMomoka` mutation to broadcast a signed typed data to Momoka. - Use the `useDidReactOnPublication` query to check if a profile has reacted on a publication. - Use the `useWhoReactedPublication` query to fetch profiles that have reacted on a publication. - Use the `useGetProfileMetadata` query to fetch the metadata of a profile. - Use the `useGetModuleMetadata` query to fetch the metadata of a module. - Use the `useValidatePublicationMetadata` query to validate publication metadata. - Use the `useRefreshPublicationMetadata` mutation to refresh publication metadata. - Use the `useNftGalleriesQuery` hook to fetch NFT galleries. - Use the `useCreateNftGallery` mutation to create a new NFT gallery. - Use the `useUpdateNftGalleryInfo` mutation to update an NFT gallery's info. - Use the `useUpdateNftGalleryItems` mutation to update an NFT gallery's items. - Use the `useUpdateNftGalleryOrder` mutation to update an NFT gallery's item order. - Use the `useDeleteNftGallery` mutation to delete an NFT gallery. - Use the `useInternalAddCuratedTag` mutation to add a curated tag. - Use the `useInternalRemoveCuratedTag` mutation to remove a curated tag. - Use the `useInternalCuratedHandles` query to fetch curated handles. - Use the `useInternalCuratedTags` query to fetch curated tags. - Use the `useInternalCuratedUpdate` mutation to update curated handles or tags. - Use the `useInternalAddInvites` mutation to add invites. - Use the `useInternalInvites` query to fetch invites. - Use the `useInternalBoostProfile` mutation to boost a profile. - Use the `useInternalBoostScore` query to fetch a profile's boost score. - Use the `useInternalClaim` mutation to claim a profile. - Use the `useInternalClaimStatus` query to fetch the claim status of an address. - Use the `useInternalMintHandleAndProfile` mutation to mint a handle and profile. - Use the `useInternalNftIndex` mutation to index NFTs. - Use the `useInternalNftVerify` mutation to verify NFTs. - Use the `useInternalUpdateModuleOptions` mutation to update module options. - Use the `useInternalUpdateProfileStatus` mutation to update a profile's status. - Use the `useInternalAllowedDomains` query to fetch allowed domains. - Use the `useInternalAllowDomain` mutation to allow a domain. - Use the `useInternalForYouFeed` mutation to update the For You feed. - Use the `useInternalPaymentHandleInfo` query to fetch payment handle info. - Use the `useInternalProfileStatus` query to fetch a profile's status. - Use the `useInternalNftIndex` mutation to index NFTs. - Use the `useInternalNftVerify` mutation to verify NFTs. - Use the `useInternalUpdateModuleOptions` mutation to update module options. - Use the `useInternalUpdateProfileStatus` mutation to update a profile's status. - Use the `useIdKitPhoneVerifyWebhook` mutation to verify a phone number using IDKit. - Use the `useNftOwnershipCondition` condition to check if a profile owns an NFT. - Use the `useEoaOwnershipCondition` condition to check if a profile owns an EOA. - Use the `useErc20OwnershipCondition` condition to check if a profile owns an ERC20 token. - Use the `useProfileOwnershipCondition` condition to check if a profile owns a profile. - Use the `useCollectCondition` condition to check if a profile has collected a publication. - Use the `useFollowCondition` condition to check if a profile is following another profile. - Use the `useAdvancedContractCondition` condition to check if a contract function returns a specific value. - Use the `useAndCondition` condition to combine multiple conditions with AND logic. - Use the `useOrCondition` condition to combine multiple conditions with OR logic. - Use the `useCanDecrypt` query to check if a profile can decrypt a publication. - Use the `useCanClaim` query to check if an address can claim a profile. - Use the `useClaimableProfiles` query to fetch claimable profiles. - Use the `useClaimableTokens` query to fetch claimable tokens. - Use the `useClaimableStatus` query to fetch the claim status of an address. - Use the `useGetModuleMetadata` query to fetch the metadata of a module. - Use the `useGetProfileMetadata` query to fetch the metadata of a profile. - Use the `useValidatePublicationMetadata` query to validate publication metadata. - Use the `useRefreshPublicationMetadata` mutation to refresh publication metadata.
  Please look all over this project, and comple@AIMAP.txt AIMAP.txt file instructing AI Programmers on how to handle this project and where to find specific stuff, to make AI's work easier in such a large database!

Tell what every file do, what page they'll render, etc.

Final Codebase Context
I've reviewed the project structure and content. Here's an expanded AIMAP.txt file with more detailed instructions for AI programmers:

Remember to follow the existing code style and patterns when adding new features or making changes. Always consider performance implications, especially when working with blockchain interactions or large datasets.

## Bookmarks Feature

The Bookmarks feature in the Hey app allows users to save and view their bookmarked publications. Here's an overview of the key components and files related to this feature:

### Main Bookmarks Page

- **File**: `apps/web/src/pages/bookmarks.tsx`
- **Purpose**: Entry point for the Bookmarks page
- **Renders**: The `Bookmarks` component

### Bookmarks Component

- **File**: `apps/web/src/components/Bookmarks/index.tsx`
- **Purpose**: Main component for the Bookmarks page
- **Key features**:
  - Uses `useProfileStore` to check if a user is logged in
  - Implements analytics tracking for page views
  - Renders the bookmarks feed and sidebar components
- **Code reference**:

### GraphQL Query

- **File**: `packages/lens/documents/queries/PublicationBookmarks.graphql`
- **Purpose**: Defines the GraphQL query for fetching bookmarked publications
- **Used by**: The `usePublicationBookmarksQuery` hook in the Feed component

### Generated Types and Hooks

- **File**: `packages/lens/generated.ts`
- **Purpose**: Contains generated TypeScript types and Apollo hooks for Lens Protocol interactions
- **Key exports**:
  - `usePublicationBookmarksQuery`
  - `useAddPublicationBookmarkMutation`
  - `useRemovePublicationBookmarkMutation`

When working with the Bookmarks feature:

1. Use the `usePublicationBookmarksQuery` hook to fetch bookmarked publications.
2. Implement bookmark/unbookmark functionality using the respective mutation hooks.
3. Ensure proper error handling and loading states in the UI.
4. Consider pagination and performance optimizations for users with many bookmarks.
5. Integrate with the global state management (Zustand stores) if needed for cross-component communication.

## External Server Connections

Apart from GraphQL/Lens interactions, the Hey app connects to several external services:

1. **ClickHouse**: Used for analytics data storage and querying.

   - Relevant files: `apps/api/src/lib/clickhouse.ts`

2. **Redis**: Used for caching and temporary data storage.

   - Relevant files: `apps/api/src/lib/redis.ts`

3. **S3 (or compatible object storage)**: Used for storing user-generated content like images.

   - Relevant files: `packages/image-cropper/src/lib/uploadToIPFS.ts`

4. **Momoka**: Data availability layer for off-chain content.

   - Relevant files: Check `packages/lens` for Momoka-related queries and mutations.

5. **Ethereum nodes**: For blockchain interactions (e.g., contract calls, transaction signing).
   - Relevant files: Check `packages/abis` and `packages/contracts` for Ethereum-related code.

## Setup Tutorial

To set up the Hey social network, follow these steps:

1. **Prerequisites**:

   - Install Node.js (v18 or later)
   - Install pnpm: `npm install -g pnpm`
   - Install Docker and Docker Compose

2. **Clone the repository**:

   ```bash
   git clone https://github.com/your-hey-repo.git
   cd hey
   ```

3. **Install dependencies**:

   ```bash
   pnpm install
   ```

4. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add the following variables:

   ```
   # Lens Protocol
   NEXT_PUBLIC_LENS_NETWORK=mainnet
   NEXT_PUBLIC_LENS_API_URL=https://api.lens.dev

   # Database
   DATABASE_URL=postgresql://username:password@localhost:5432/hey

   # Redis
   REDIS_URL=redis://localhost:6379

   # ClickHouse
   CLICKHOUSE_URL=http://localhost:8123
   CLICKHOUSE_USER=default
   CLICKHOUSE_PASSWORD=

   # S3 or IPFS
   NEXT_PUBLIC_EVER_API_KEY=your-ever-api-key
   NEXT_PUBLIC_EVER_ENDPOINT=https://endpoint.4everland.co

   # Ethereum
   NEXT_PUBLIC_ALCHEMY_KEY=your-alchemy-key
   NEXT_PUBLIC_INFURA_ID=your-infura-id

   # Other services
   NEXT_PUBLIC_IMAGEKIT_URL=https://ik.imagekit.io/your-project
   NEXT_PUBLIC_IMAGEKIT_ID=your-imagekit-id
   ```

   Replace the placeholder values with your actual credentials.

5. **Set up local services**:
   Create a `docker-compose.yml` file in the root directory with the following content:

   ```yaml
   version: '3'
   services:
     postgres:
       image: postgres:13
       environment:
         POSTGRES_DB: hey
         POSTGRES_USER: username
         POSTGRES_PASSWORD: password
       ports:
         - '5432:5432'

     redis:
       image: redis:6
       ports:
         - '6379:6379'

     clickhouse:
       image: clickhouse/clickhouse-server:22
       ports:
         - '8123:8123'
   ```

   Run `docker-compose up -d` to start these services.

6. **Initialize the database**:

   ```bash
   pnpm run db:push
   ```

7. **Start the development server**:

   ```bash
   pnpm dev
   ```

8. **Access the app**:
   Open your browser and navigate to `http://localhost:3000`

Remember to set up the necessary external services (Ethereum nodes, IPFS/S3, etc.) and update the `.env.local` file with the correct credentials before deploying to production.

For production deployment, consider using platforms like Vercel for the web app and Railway for the API and cron jobs, as mentioned in the deployment instructions.

## Docker Installation and Setup

To install Docker and Docker Compose, use the following commands:

1. Install Docker:

   ```bash
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   ```

2. Install Docker Compose:

   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   ```

3. Start Docker services:
   ```bash
   docker-compose up -d
   ```

## External Services and Their Purposes

1. **PostgreSQL**:

   - Purpose: Main database for storing user data, posts, and other application-specific information.
   - Usage: Stores persistent data that needs to be queried and updated frequently.
   - Configuration: See the `docker-compose.yml` file for setup details.

2. **Redis**:

   - Purpose: In-memory data store used for caching and temporary data storage.
   - Usage: Improves performance by caching frequently accessed data and managing session information.
   - Configuration: See the `docker-compose.yml` file for setup details.

3. **ClickHouse**:

   - Purpose: Analytics database for event tracking and data analysis.
   - Usage: Stores and processes large volumes of event data for user behavior analysis and reporting.
   - Configuration: See the `docker-compose.yml` file for setup details.

4. **S3 (or compatible object storage)**:

   - Purpose: Stores user-generated content like images and other media files.
   - Usage: Provides scalable and reliable storage for user uploads and other static assets.
   - Configuration: Set up in the `.env.local` file with the `NEXT_PUBLIC_EVER_API_KEY` and `NEXT_PUBLIC_EVER_ENDPOINT` variables.

5. **Momoka**:

   - Purpose: Data availability layer for off-chain content.
   - Usage: Enables faster and cheaper transactions by storing some data off-chain while maintaining verifiability.
   - Configuration: Integrated through the Lens Protocol; check `packages/lens` for related queries and mutations.

6. **Ethereum nodes**:

   - Purpose: For blockchain interactions such as contract calls and transaction signing.
   - Usage: Enables interaction with the Ethereum blockchain for features like profile creation, following, and other on-chain actions.
   - Configuration: Set up in the `.env.local` file with the `NEXT_PUBLIC_ALCHEMY_KEY` and `NEXT_PUBLIC_INFURA_ID` variables.

7. **Lens Protocol API**:

   - Purpose: Core protocol for social graph and content management.
   - Usage: Provides the foundation for decentralized social networking features.
   - Configuration: Set up in the `.env.local` file with the `NEXT_PUBLIC_LENS_API_URL` variable.

8. **ImageKit**:
   - Purpose: Image processing and delivery service.
   - Usage: Optimizes and serves images for better performance and user experience.
   - Configuration: Set up in the `.env.local` file with the `NEXT_PUBLIC_IMAGEKIT_URL` and `NEXT_PUBLIC_IMAGEKIT_ID` variables.

When setting up these services, ensure that all necessary environment variables are properly configured in your `.env.local` file and that the required services are running before starting the application.

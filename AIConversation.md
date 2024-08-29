## User:

Failed to compile.
./src/components/Settings/Profile/Profile.tsx:424:17
Type error: Type '{ id: string; onChange: (evt: ChangeEvent<HTMLInputElement>) => Promise<void>; }' is not assignable to type 'IntrinsicAttributes & ChooseFileProps'.
Property 'id' does not exist on type 'IntrinsicAttributes & ChooseFileProps'.
422 | <div className="flex items-center space-x-3">
423 | <ChooseFile

> 424 | id="avatar"

      |                 ^

425 | onChange={(evt: ChangeEvent<HTMLInputElement>) =>
426 | onFileChange(evt, 'avatar')
427 | }
 ELIFECYCLE  Command failed with exit code 1.
Error: Command "pnpm run build" exited with 1

## AI (gpt-4):

The error you're encountering is due to the `ChooseFile` component not accepting an `id` prop, as defined in its props interface. The `ChooseFile` component generates its own `id` using the `useId` hook and does not expect an `id` to be passed as a prop.

To resolve this issue, you should remove the `id` prop from the `ChooseFile` component usage in your `ProfileSettingsForm` component. Here's how you can adjust the code:

```typescript:apps/web/src/components/Settings/Profile/Profile.tsx
422|          <div className="space-y-2">
423|            <div className="label">Avatar</div>
424|            <div className="flex items-center space-x-3">
425|              <ChooseFile
426|                onChange={(evt: ChangeEvent<HTMLInputElement>) =>
427|                  onFileChange(evt, 'avatar')
428|                }
429|              />
430|              <Input
431|                id="avatarIPFS"
432|                onChange={(e) => setAvatarIPFS(e.target.value)}
433|                placeholder="IPFS CID for avatar"
434|                type="text"
435|                value={avatarIPFS}
436|              />
437|            </div>
438|          </div>
```

This change should resolve the compilation error. Make sure to apply a similar fix for any other instances where you might be incorrectly passing an `id` prop to the `ChooseFile` component.

## User:

User message unavailable due to missing data.

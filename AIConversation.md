## User:

Failed to compile.
./src/components/Settings/Profile/Profile.tsx:229:19
Type error: Argument of type '"avatarIPFS" | "coverIPFS"' is not assignable to parameter of type '"bio" | "location" | "name" | "website" | "x"'.
Type '"avatarIPFS"' is not assignable to type '"bio" | "location" | "name" | "website" | "x"'.
227 | ) => {
228 | const newValues = { ...form.getValues(), [field]: value };

> 229 | form.setValue(field, value); // Update the specific field

      |                   ^

230 | // Optionally trigger validation or other side effects
231 | };
232 |
 ELIFECYCLE  Command failed with exit code 1.
Error: Command "pnpm run build" exited with 1

## AI (gpt-4-turbo-2024-04-09):

The error you're encountering is due to TypeScript's type checking. The `form.setValue` method expects a key that matches the fields defined in your form schema, but `"avatarIPFS"` and `"coverIPFS"` are not recognized as valid keys according to the schema you've defined.

To resolve this issue, you need to extend your form schema to include `"avatarIPFS"` and `"coverIPFS"` as valid fields. This will allow TypeScript to recognize these fields as valid keys when calling `form.setValue`.

Here's how you can adjust your form schema to include these fields:

1. **Extend the Form Schema**: Add `"avatarIPFS"` and `"coverIPFS"` to the schema used in `useZodForm`.

```204:222:apps/web/src/components/Settings/Profile/Profile.tsx
      });
    }
  };
  ...
  const form = useZodForm({
    defaultValues: {
      bio: currentProfile?.metadata?.bio || '',
      location: getProfileAttribute(
        'location',
        currentProfile?.metadata?.attributes
      ),
      name: currentProfile?.metadata?.displayName || '',
      website: getProfileAttribute(
        'website',
        currentProfile?.metadata?.attributes
      ),
      x: getProfileAttribute(
        'x',
        currentProfile?.metadata?.attributes
```

Here's an example of how you might modify the schema:

```typescript
const editProfileSchema = z.object({
  bio: z.string().optional(),
  location: z.string().optional(),
  name: z.string().optional(),
  website: z.string().optional(),
  x: z.string().optional(),
  avatarIPFS: z.string().optional(), // Add this line
  coverIPFS: z.string().optional() // Add this line
});
```

2. **Update the Form Initialization**: Ensure that the default values for these new fields are set, possibly to an empty string or a null value, depending on your application's needs.

```typescript
const form = useZodForm({
  defaultValues: {
    bio: currentProfile?.metadata?.bio || '',
    location: getProfileAttribute(
      'location',
      currentProfile?.metadata?.attributes
    ),
    name: currentProfile?.metadata?.displayName || '',
    website: getProfileAttribute(
      'website',
      currentProfile?.metadata?.attributes
    ),
    x: getProfileAttribute('x', currentProfile?.metadata?.attributes)?.replace(
      /(https:\/\/)?x\.com\//,
      ''
    ),
    avatarIPFS: '', // Set default value
    coverIPFS: '' // Set default value
  },
  schema: editProfileSchema
});
```

By making these changes, you ensure that TypeScript recognizes `"avatarIPFS"` and `"coverIPFS"` as valid fields in your form, which should resolve the compilation error.

## User:

User message unavailable due to missing data.

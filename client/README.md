# MERN Stack Frontend (Vite)

This is the frontend portion of the MERN stack application, built with:

- React
- Vite (build tool)
- React Bootstrap
- React Table

## Project Structure

- `/src/components` - Reusable UI components
  - `/modals` - Modal dialog components
  - `/tables` - Table components for data display
- `/src/hooks` - Custom React hooks for data fetching and state management
- `/src/pages` - Page components
- `/src/assets` - Static assets like images and fonts

## Key Features

- PersonalDetails management interface
- CRUD operations through MySQL database
- Responsive design with Bootstrap

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code with Prettier
npm run format
```

## Environment Configuration

The application uses Vite's built-in proxy configuration to handle API requests. No additional environment variables are required in the frontend as all API calls are proxied through the development server.

## API Integration

The frontend communicates with the backend through the following API endpoints:

- `GET /personal-details` - Get all personal details records
- `POST /personal-details` - Create a new personal details record
- `PUT /personal-details/:id` - Update an existing record
- `DELETE /personal-details/:id` - Delete a record

## Component Usage

### DataList

Renders a table for personal details with full CRUD support. Props:
- `data` (array): The list of personal details records.
- `updateMyData` (function): Callback to update a record (inline editing).
- `deleteMyData` (function): Callback to delete a record.
- `editingIndex` (number): The index of the row currently being edited.
- `setEditingIndex` (function): Setter for the editing row index.
- `addRow` (function): Callback to add a new record.
- `postError` (string): Error message for add operation.
- `updateError` (string): Error message for update operation.
- `deleteError` (string|bool): Error message for delete operation.

**Example:**
```jsx
<DataList
  data={items}
  updateMyData={updateMyData}
  deleteMyData={deleteMyData}
  editingIndex={editingIndex}
  setEditingIndex={setEditingIndex}
  addRow={addRow}
  postError={postError}
  updateError={updateError}
  deleteError={deleteError}
/>
```

### AddRowModal

Displays a modal dialog for adding a new record. Props:
- `addRow` (function): Callback to add a new record.

**Example:**
```jsx
<AddRowModal addRow={addRow} />
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.

## Support

For questions or support, please open an issue in the repository.

# Get-Product-Quotations

The product quotation creation feature enables users to generate quotations for products. This feature provides a user-friendly interface to input relevant information and specifications, allowing users to request quotations for the desired products.

## Key Functionality
- **Create Quotations**: Users can fill out a form to enter the product requirements like contact information, product specifications, and desired quantities.
- **Storage and Organization**: Quotations submitted by users are stored in the SQLite database, ensuring that all information is securely saved and easily accessible for future reference.
- **Validation and Error Handling**: The web application includes validation mechanisms to ensure that all required fields are completed and that data is entered in the correct format. In case of any errors, appropriate error messages are displayed to guide users.
- **API Endpoint**: A REST API is built using the Django REST Framework and via the API endpoints, the quotation are created.
- **Email Notifications**: Upon successful submission of a quotation, an email notification is be sent to the user, confirming the receipt and providing further information or instructions.

![image](https://github.com/riyasai22/Get-Product-Quotations/assets/80235375/34fb67f8-6aaa-4331-9295-1a6518cb5afb)

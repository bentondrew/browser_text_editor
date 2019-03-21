# App Description

## Front-end
### Browser client description
Home view:
* Logged out state:
    * Logo and text with "Text Editor" in center of view.
    * Login link in upper right corner.
* Logged in state:
    * Logo in upper left which links to home view.
    * Account image is on upper right. Account image click drops down a
      menu with account link and logout button.
    * Middle of view has an element composed of two parts. This element
      is for file editing.
        * Top part of element is menu element.
            * Contains a File menu.
                * Manage item.
                    * Pops up a dialog.
                        * Dialog displays list of files which have been saved.
                          List comes from a get request to the file service.
                          Dialog has two buttons. Disabled Delete and Close.
                          Close closes Dialog without doing anything.
                          Can highlight an item from the file list. This
                          highlight enables the Delete button. Delete button
                          request for highlighted file to be deleted. After
                          delete, requests an updated list of files.
                          Errors are posted to a flash message store which
                          is displayed in this dialog.
                * Load item.
                    * Pops up a dialog.
                        * Dialog displays list of files which have been saved.
                          List comes from a get request to the file service.
                          Dialog has two buttons, Disabled Load and Close.
                          Close closes Dialog without doing anything.
                          Can highlight an item from the file list. This
                          highlight enables the Load button. Load button
                          requests highlighted file from file service and
                          places it in the store. (File in store populates
                          in text editing element; replacing any file in
                          store). Load click closes dialog.
                          Errors are posted to a flash message store which
                          is displayed on home view.
                * Save item.
                    * Upload file in store to file service (this overwrites
                      existing file).
                * Download file.
                    * Saves file on local machine.
                * Close item.
                    * Opens save dialog. Three buttons, Yes, No, and Cancel.
                        * Yes uploads file in store and then closes dialog.
                          If upload is successful store is cleared. If unsuccessful
                          file kept in store and error message flashed.
                        * No does not upload file and closes dialog. File in store
                          is cleared.
                        * Cancel closes dialog without doing anything.
            * Contains an Edit menu.
                * Undo item.
                    * Undoes last store change.
                        * Store changes:
                            * Insert text (via text edit element, paste,
                              load, and close).
                * Copy item.
                    * Copies text highlighted in text edit element into
                      clipboard.
                * Paste item.
                    * Inserts text in clipboard at cursor location in text
                      edit element.
        * Bottom part is text editing element.
            * Has field into which text can be entered.
            * Displays file in store.
            * Initializes to file with one line.
            * Displays line number for lines in file.
            * Tracks cursor position in file.
            * Allows for multi-line highlighting.
    * Logout button clears user info (login credentials and store)
      and resets state to logged out. If file in store, prompts for
      file save before logout. Failed save cancels logout.

Login view:
* Enter credentials which are verified with auth service.
* Get token back, which is stored in session.
* Successful login redirects to home view.
* Unsuccessful login posts a flash message indicating bad login.
* Logo icon is on upper left of login view and clicking links to
  home view.

Account view:
* Displays user image.
* Displays user name.
* Logo in upper left which when clicked re-directs to home.

## Back-end
### File service
* Has endpoints for user files.
* Supports:
    * /files/
        * GET:
            * Returns a list of files in service for user.
    * /files/{file_name}
        * GET:
            * Downloads text file at the requested resource.
        * POST:
            * Stores uploaded text file.
        * PUT
            * Updates existing text file with uploaded file.
        * DELETE
            * Deletes file at the requested resource.
* Gets user from token provided in request.
* Validates token with user_auth service before acting.

### User Auth
* Has endpoints for user accounts.
* Supports:
    * /user_auth/session
        * POST:
            * Returns token for valid credentials.
    * /user_auth/validate_token
        * POST:
            * Request contains JSON with token to be validated.
            * Returns true or false if provided token
              is valid.

### Bowser Client
* Has endpoints for serving up the files required for the
  bowser client.
* App "/" is directed to this service.
* Handles service general 404.

### Gateway
* Reverse proxy for the back-end services. Acts as a single
  point of app access for external requests.

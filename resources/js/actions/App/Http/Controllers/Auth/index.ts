import LoginController from './LoginController'
import RegisteredUserController from './RegisteredUserController'
import PasswordResetLinkController from './PasswordResetLinkController'
import NewPasswordController from './NewPasswordController'
import EmailVerificationPromptController from './EmailVerificationPromptController'
import VerifyEmailController from './VerifyEmailController'
import EmailVerificationNotificationController from './EmailVerificationNotificationController'
const Auth = {
    LoginController: Object.assign(LoginController, LoginController),
RegisteredUserController: Object.assign(RegisteredUserController, RegisteredUserController),
PasswordResetLinkController: Object.assign(PasswordResetLinkController, PasswordResetLinkController),
NewPasswordController: Object.assign(NewPasswordController, NewPasswordController),
EmailVerificationPromptController: Object.assign(EmailVerificationPromptController, EmailVerificationPromptController),
VerifyEmailController: Object.assign(VerifyEmailController, VerifyEmailController),
EmailVerificationNotificationController: Object.assign(EmailVerificationNotificationController, EmailVerificationNotificationController),
}

export default Auth
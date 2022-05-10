const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 20
  },
  lastName: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 20
  },
  password: {
    type: String,
    require: true,
    minlength: 8,
    select: false
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true
  },
  passwordModifiedAt: {
    type: Date,
    default: Date.now()
  },
  passwordResetToken: {
    type: String,
    default: undefined
  },
  passwordResetExpires: {
    type: Date,
    default: undefined
  },
  isActive: {
    type: Boolean,
    default: true,
    select: false
  }

})

// userSchema.pre('save', function(next) {
//   if (!this.isModified('password') || this.isNew) return next();

//   this.passwordModifiedAt = Date.now() - 1000;
//   next();
// });


// userSchema.methods.checkPasswords = async function(inputPassword, userPassword){
//   return await bcrypt.compare(inputPassword, userPassword)
// }

// userSchema.methods.createPasswordResetToken = async function(){
//   const resetToken = crypto.randomBytes(32).toString('hex')
//   this.passwordResetToken = crypto
//   .createHash('sha256')
//   .update(resetToken)
//   .digest('hex');

//   this.passwordResetExpires = Date.now() + 10 * 60 * 100
//   return resetToken;
// }
  
const User = mongoose.model('User', userSchema)
module.exports = User;
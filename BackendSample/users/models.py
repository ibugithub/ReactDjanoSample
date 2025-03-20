from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from cloudinary.models import CloudinaryField

class UserManager(BaseUserManager):
  def create_user(self, email, name, password=None, **extra_fields):
    if not email:
        raise ValueError('Users must have an email address')
    user = self.model(email=self.normalize_email(email), name=name)
    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_superuser(self, email, name, password, **extra_fields):
    user = self.create_user(email, name, password)
    user.is_admin = True
    user.is_verified = True
    user.is_superuser = True
    user.save(using=self._db)
    return user

class User(AbstractBaseUser):
  email = models.EmailField(unique=True)
  name = models.CharField(max_length=255)
  is_verified = models.BooleanField(default=False)
  is_admin = models.BooleanField(default=False)
  is_superuser = models.BooleanField(default=False)
  objects = UserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name']

  def __str__(self):
    return self.email

  def has_perm(self, perm, obj=None):
    return True

  def has_module_perms(self, app_label):
    return True

  @property
  def is_staff(self):
    return self.is_admin
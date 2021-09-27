
from django.contrib import admin
from .models import post, host


@admin.register(post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'host')


@admin.register(host)
class HostAdmin(admin.ModelAdmin):
    list_display = ('name', 'age')

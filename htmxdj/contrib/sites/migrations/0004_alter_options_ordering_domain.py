# Generated by Django 3.1.7 on 2021-02-04 14:49

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("sites", "0003_set_site_domain_and_name"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="site",
            options={
                "ordering": ["domain"],
                "verbose_name": "site",
                "verbose_name_plural": "sites",
            },
        ),
    ]

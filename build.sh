#!/bin/bash
ECHO "export const environment = {
  production: true,
  fbDbUrl: '$1',
};" > "src/environments/environment.ts"

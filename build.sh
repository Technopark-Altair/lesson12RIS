#!/bin/bash
echo "export const environment = {
  production: true,
  fbDbUrl: '$1',
};" > "src/environments/environment.ts"

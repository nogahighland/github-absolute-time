# なにこれ？

- GithubのIssue, Pull Request中の「X hours/days ago」表記を絶対時間として表示し直す拡張です。
- ラベルの色をOpen/Close/Mergedのラベル色と揃えるので、長いIssue/PRを見ている途中でもステータスを忘れることがありません。
- 開発は最低限なので、かなり手抜きです（拡張名すら付いていないし、絶対時間表記は日本語のみです）

what|before|after
---|---|---
status|![status1](https://user-images.githubusercontent.com/19767299/48174748-89940900-e34c-11e8-8e21-afcd7a6d7b99.png)|![status2](https://user-images.githubusercontent.com/19767299/48174749-89940900-e34c-11e8-9872-0b8df327234c.png)
open PR|![open1](https://user-images.githubusercontent.com/19767299/48174746-88fb7280-e34c-11e8-8eea-d2cf7230b8e2.png)|![open2](https://user-images.githubusercontent.com/19767299/48174747-88fb7280-e34c-11e8-86cd-56cfa16319ce.png)
merged PR|![merged1](https://user-images.githubusercontent.com/19767299/48174744-88fb7280-e34c-11e8-9c68-cd4254abf150.png)|![merged2](https://user-images.githubusercontent.com/19767299/48174745-88fb7280-e34c-11e8-9819-9782b4274a30.png)

# インストール方法

このリポジトリをcloneして、Chromeにパッケージ化されていない拡張として追加してください。

# 依存関係の管理方法

- package.json並びに-lock.jsonを更新して下さい。
- rootにある各種オープンソースライブラリは、 `npm install` したあと生成した `node_modules` からコピーして配置してください。(一応、出典元を明確にするため)

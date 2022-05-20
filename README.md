
React App deployed on AWS using services like S3 , Route53 , CloudFront and securing Site using SSL certificates: 

NOTE : I've used this react "expense-tracker-app" for this AWS project . 


# STEPS :

1.  Setup ANY sample react App on your computer : 

### `npx create-react-app my-appname`
In the react-project directory, run:

### `npm start`
Runs the app in the development mode. Open [http://localhost:3000] to view the sample react app in your browser.

### `npm run build` 
Builds the app for production to the `build` folder.The build is minified . 

2. S3 :

> Create 2 S3 buckets with names `example.com` and `www.example.com`
Note : Enable bucket versioning 

> For s3://www.example.com -> enable public access and static site properties using HTTPS and Upload "BUILD" FOLDER from REACT DIR. to this S3
Also setup bucket policy to allow action: GetObject .

> For s3://example.com -> enable static site properties using HTTPS and set redirection to bucket `www.example.com` 

> Note: All files related to React app are stored in S3 bucket `www.example.com` only . 

3. SSL Certificates to secure our Domains/website :

> Prerequisites : Setup hosted zone to be used for deploying your app in Route53 .

> Create [request from aws] 1 SSL certificate in "north-virginia region" to be used with CloudFront for domain names : `www.example.com` and `example.com` .

> Validate it using your DNS , by setting up CNAME records (manually/automatically) in Route53 . After the certificate's status changes to 'issued' you're good to go !!

4. CloudFront:

> Create 2 cloudFronts setting origin as static website URL of S3 `www.example.com`, and setup additional domain names for as `www.example.com` for one and `www.example.com` for other distribution . 

> Other settings : viewer's automatic redirection from "http" to "https" , Attach ssl certificate created in the previous step to both the distributions . 

5. ROUTE53: 

> Setup 2 records with simple routing policy using 'Alias' option : `example.com` and `www.example.com` which points to their respective CloudFront aliases.

### ALL DONE !! 

You can access your application using `www.example.com` or `example.com` from your browser .Notice : It is secured using SSL i.e. you're being redirected to https secured site.

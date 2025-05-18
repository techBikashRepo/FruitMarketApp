# Database Setup Documentation

This project uses a MySQL database for backend data storage. Follow these steps to set up the database after cloning the repository.

## 1. Database Details

- **Database Name:** `nodemysql`
- **Host:** `localhost`
- **Port:** `3306`
- **User:** `root` (default, change as needed)
- **Password:** `admin` (default, change as needed)

## 2. Table Structure

### Table: `productss`

| Column     | Type          | Null | Key | Default | Extra          |
| ---------- | ------------- | ---- | --- | ------- | -------------- |
| id         | int(11)       | NO   | PRI | NULL    | auto_increment |
| name       | varchar(255)  | YES  |     | NULL    |                |
| image      | varchar(255)  | YES  |     | NULL    |                |
| price      | decimal(10,2) | YES  |     | NULL    |                |
| created_at | datetime      | YES  |     | NULL    |                |

> **Note:** The table name is `productss` (with double 's').

## 3. SQL to Create Database and Table

```
CREATE DATABASE IF NOT EXISTS nodemysql;
USE nodemysql;

CREATE TABLE IF NOT EXISTS productss (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  image VARCHAR(255),
  price DECIMAL(10,2),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 4. Configuration

- Update your MySQL credentials in `backend/src/app.js` or use environment variables for security.
- If you change the database name or table name, update them in the code as well.

## 5. Seeding Example Data (Optional)

```
INSERT INTO productss (name, image, price) VALUES
('Apples', 'apples.jpg', 2.99),
('Oranges', 'orange.jpg', 3.49),
('Pineapple', 'pineapple.jpg', 4.99),
('Bananas', 'bananas.jpg', 1.99);
```

## 6. Troubleshooting

- Ensure MySQL server is running and accessible.
- If you get connection errors, check your credentials and port.
- If you get table not found errors, ensure you ran the SQL above and the table is named `productss`.

---

For any issues, please refer to this documentation or contact the project maintainer.

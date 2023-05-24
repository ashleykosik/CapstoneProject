CREATE TABLE `Users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Movies` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL,
	`year` INT NOT NULL,
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Books` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL,
	`author` VARCHAR(255) NOT NULL,
	`total_pages` INT NOT NULL,
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Games` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL,
	`platform` VARCHAR(255) NOT NULL,
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `TV-Shows` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL,
	`number_of_seasons` INT NOT NULL,
	`total_episodes` INT NOT NULL,
	`average_episode_length` INT NOT NULL,
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Movies` ADD CONSTRAINT `Movies_fk0` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`);

ALTER TABLE `Books` ADD CONSTRAINT `Books_fk0` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`);

ALTER TABLE `Games` ADD CONSTRAINT `Games_fk0` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`);

ALTER TABLE `TV-Shows` ADD CONSTRAINT `TV-Shows_fk0` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`);







-- Exported from QuickDBD: https://www.quickdatatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/schema/maYs5JmFj0OYPdtSIGoG4g
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE `users` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `username` varchar(255)  NOT NULL ,
    `password` varchar(255)  NOT NULL ,
    `fullname` varchar(255)  NOT NULL ,
    `email` varchar(255)  NOT NULL ,
    `role` varchar(255)  NOT NULL ,
    `title` varchar(255)  NOT NULL ,
    `accessToken` varchar(255)  NOT NULL ,
    `date_created` datetime  NOT NULL ,
    `date_modified` datetime  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `tickets` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `subject` varchar(255)  NOT NULL ,
    `notes` text  NOT NULL ,
    `owner` int  NOT NULL ,
    `status` int  NOT NULL ,
    `date_created` datetime  NOT NULL ,
    `date_modified` datetime  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `ticket_status` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `status_name` varchar(50)  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `tickets_thread` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `ticket_id` int  NOT NULL ,
    `owner` int  NOT NULL ,
    `message` text  NOT NULL ,
    `attachment` text  NOT NULL ,
    `date_created` datetime  NOT NULL ,
    `date_modified` datetime  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

ALTER TABLE `tickets` ADD CONSTRAINT `fk_tickets_owner` FOREIGN KEY(`owner`)
REFERENCES `users` (`id`);

ALTER TABLE `tickets` ADD CONSTRAINT `fk_tickets_status` FOREIGN KEY(`status`)
REFERENCES `ticket_status` (`id`);

ALTER TABLE `tickets_thread` ADD CONSTRAINT `fk_tickets_thread_ticket_id` FOREIGN KEY(`ticket_id`)
REFERENCES `tickets` (`id`);

ALTER TABLE `tickets_thread` ADD CONSTRAINT `fk_tickets_thread_owner` FOREIGN KEY(`owner`)
REFERENCES `users` (`id`);


# UI Components Documentation

This directory contains a comprehensive set of reusable UI components built with React, TypeScript, and Radix UI primitives. All components are styled with Tailwind CSS and follow consistent design patterns.

## Table of Contents

- [Accordion](#accordion)
- [Alert](#alert)
- [Alert Dialog](#alert-dialog)
- [Avatar](#avatar)
- [Badge](#badge)
- [Breadcrumb](#breadcrumb)
- [Button](#button)
- [Calendar](#calendar)
- [Card](#card)
- [Carousel](#carousel)
- [Checkbox](#checkbox)
- [Collapsible](#collapsible)
- [Command](#command)
- [Dialog](#dialog)
- [Drawer](#drawer)
- [Dropdown Menu](#dropdown-menu)
- [Input](#input)
- [Label](#label)
- [Navigation Menu](#navigation-menu)
- [Pagination](#pagination)
- [Popover](#popover)
- [Radio Group](#radio-group)
- [Select](#select)
- [Separator](#separator)
- [Switch](#switch)
- [Tabs](#tabs)
- [Textarea](#textarea)

---

## Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

### Components

- `Accordion` - Root container
- `AccordionItem` - Individual accordion item
- `AccordionTrigger` - Clickable header
- `AccordionContent` - Collapsible content

### Usage

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components.
    </AccordionContent>
  </AccordionItem>
</Accordion>;
```

### Props

- `Accordion`: All Radix UI Accordion.Root props
- `AccordionItem`: All Radix UI Accordion.Item props
- `AccordionTrigger`: All Radix UI Accordion.Trigger props
- `AccordionContent`: All Radix UI Accordion.Content props

---

## Alert

Displays a callout for user attention.

### Components

- `Alert` - Root container
- `AlertTitle` - Alert title
- `AlertDescription` - Alert description

### Usage

```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

### Props

- `Alert`: `variant?: "default" | "destructive"`
- `AlertTitle`: Standard div props
- `AlertDescription`: Standard div props

---

## Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

### Components

- `AlertDialog` - Root container
- `AlertDialogTrigger` - Trigger button
- `AlertDialogContent` - Modal content
- `AlertDialogHeader` - Header section
- `AlertDialogFooter` - Footer section
- `AlertDialogTitle` - Dialog title
- `AlertDialogDescription` - Dialog description
- `AlertDialogAction` - Action button
- `AlertDialogCancel` - Cancel button

### Usage

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>;
```

### Props

All components accept their respective Radix UI primitive props.

---

## Avatar

An image element with a fallback for representing the user.

### Components

- `Avatar` - Root container
- `AvatarImage` - Avatar image
- `AvatarFallback` - Fallback text/icon

### Usage

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

<Avatar>
  <AvatarImage src="/avatars/01.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>;
```

### Props

- `Avatar`: All Radix UI Avatar.Root props
- `AvatarImage`: All Radix UI Avatar.Image props
- `AvatarFallback`: All Radix UI Avatar.Fallback props

---

## Badge

Small status descriptors for UI elements.

### Components

- `Badge` - Badge component

### Usage

```tsx
import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

### Props

- `Badge`: `variant?: "default" | "secondary" | "destructive" | "outline"`, `asChild?: boolean`

---

## Breadcrumb

Displays the path to the current resource using a hierarchy of links.

### Components

- `Breadcrumb` - Root container
- `BreadcrumbList` - List container
- `BreadcrumbItem` - Individual item
- `BreadcrumbLink` - Link component
- `BreadcrumbPage` - Current page
- `BreadcrumbSeparator` - Separator
- `BreadcrumbEllipsis` - Ellipsis for overflow

### Usage

```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>;
```

### Props

All components accept standard HTML element props with additional `asChild` prop for `BreadcrumbLink`.

---

## Button

Displays a button or a component that looks like a button.

### Components

- `Button` - Button component

### Usage

```tsx
import { Button } from "@/components/ui/button"

<Button>Button</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>
```

### Props

- `Button`: `variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"`, `size?: "default" | "sm" | "lg" | "icon"`, `asChild?: boolean`

---

## Calendar

A date field component that allows users to enter and edit date.

### Components

- `Calendar` - Calendar component
- `CalendarDayButton` - Individual day button

### Usage

```tsx
import { Calendar } from "@/components/ui/calendar";

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>;
```

### Props

- `Calendar`: All react-day-picker DayPicker props plus `buttonVariant?: React.ComponentProps<typeof Button>["variant"]`

---

## Card

Displays a card with header, content, and footer.

### Components

- `Card` - Root container
- `CardHeader` - Header section
- `CardTitle` - Card title
- `CardDescription` - Card description
- `CardAction` - Action area
- `CardContent` - Main content
- `CardFooter` - Footer section

### Usage

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>;
```

### Props

All components accept standard div props.

---

## Carousel

A carousel with motion and swipe built using Embla.

### Components

- `Carousel` - Root container
- `CarouselContent` - Content wrapper
- `CarouselItem` - Individual slide
- `CarouselPrevious` - Previous button
- `CarouselNext` - Next button

### Usage

```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>;
```

### Props

- `Carousel`: `opts?: CarouselOptions`, `plugins?: CarouselPlugin`, `orientation?: "horizontal" | "vertical"`, `setApi?: (api: CarouselApi) => void`
- Other components accept standard props

---

## Checkbox

A control that allows the user to toggle between checked and not checked.

### Components

- `Checkbox` - Checkbox component

### Usage

```tsx
import { Checkbox } from "@/components/ui/checkbox"

<Checkbox />
<Checkbox defaultChecked />
<Checkbox disabled />
```

### Props

- `Checkbox`: All Radix UI Checkbox.Root props

---

## Collapsible

An interactive component which expands/collapses content.

### Components

- `Collapsible` - Root container
- `CollapsibleTrigger` - Trigger button
- `CollapsibleContent` - Collapsible content

### Usage

```tsx
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects.
  </CollapsibleContent>
</Collapsible>;
```

### Props

All components accept their respective Radix UI primitive props.

---

## Command

Fast, composable, unstyled command menu for React.

### Components

- `Command` - Root container
- `CommandDialog` - Dialog wrapper
- `CommandInput` - Search input
- `CommandList` - Results list
- `CommandEmpty` - Empty state
- `CommandGroup` - Group of items
- `CommandItem` - Individual item
- `CommandShortcut` - Keyboard shortcut
- `CommandSeparator` - Separator

### Usage

```tsx
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>;
```

### Props

All components accept their respective cmdk props.

---

## Dialog

A window overlaid on either the primary window or another dialog window.

### Components

- `Dialog` - Root container
- `DialogTrigger` - Trigger button
- `DialogContent` - Modal content
- `DialogHeader` - Header section
- `DialogFooter` - Footer section
- `DialogTitle` - Dialog title
- `DialogDescription` - Dialog description
- `DialogClose` - Close button

### Usage

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">{/* Form content */}</div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>;
```

### Props

- `DialogContent`: `showCloseButton?: boolean`
- All other components accept their respective Radix UI primitive props

---

## Drawer

A drawer component for mobile.

### Components

- `Drawer` - Root container
- `DrawerTrigger` - Trigger button
- `DrawerContent` - Drawer content
- `DrawerHeader` - Header section
- `DrawerFooter` - Footer section
- `DrawerTitle` - Drawer title
- `DrawerDescription` - Drawer description
- `DrawerClose` - Close button

### Usage

```tsx
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        <DrawerDescription>This action cannot be undone.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0">{/* Content */}</div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>;
```

### Props

All components accept their respective vaul props.

---

## Dropdown Menu

Displays a menu to the user — such as a set of actions or functions — triggered by a button.

### Components

- `DropdownMenu` - Root container
- `DropdownMenuTrigger` - Trigger button
- `DropdownMenuContent` - Menu content
- `DropdownMenuItem` - Menu item
- `DropdownMenuCheckboxItem` - Checkbox item
- `DropdownMenuRadioItem` - Radio item
- `DropdownMenuLabel` - Menu label
- `DropdownMenuSeparator` - Separator
- `DropdownMenuShortcut` - Keyboard shortcut
- `DropdownMenuGroup` - Group of items
- `DropdownMenuPortal` - Portal wrapper
- `DropdownMenuSub` - Submenu
- `DropdownMenuSubContent` - Submenu content
- `DropdownMenuSubTrigger` - Submenu trigger
- `DropdownMenuRadioGroup` - Radio group

### Usage

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>;
```

### Props

- `DropdownMenuItem`: `inset?: boolean`, `variant?: "default" | "destructive"`
- `DropdownMenuLabel`: `inset?: boolean`
- `DropdownMenuSubTrigger`: `inset?: boolean`
- All other components accept their respective Radix UI primitive props

---

## Input

Displays a form input field or a component that looks like an input field.

### Components

- `Input` - Input component

### Usage

```tsx
import { Input } from "@/components/ui/input"

<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input disabled />
```

### Props

- `Input`: All standard input element props

---

## Label

Renders an accessible label associated with controls.

### Components

- `Label` - Label component

### Usage

```tsx
import { Label } from "@/components/ui/label"

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />
```

### Props

- `Label`: All Radix UI Label.Root props

---

## Navigation Menu

A collection of links for navigating websites.

### Components

- `NavigationMenu` - Root container
- `NavigationMenuList` - List container
- `NavigationMenuItem` - Individual item
- `NavigationMenuTrigger` - Trigger button
- `NavigationMenuContent` - Content panel
- `NavigationMenuLink` - Link component
- `NavigationMenuIndicator` - Active indicator
- `NavigationMenuViewport` - Viewport container

### Usage

```tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Beautifully designed components built with Radix UI and
                  Tailwind CSS.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuViewport />
</NavigationMenu>;
```

### Props

- `NavigationMenu`: `viewport?: boolean`
- All other components accept their respective Radix UI primitive props

---

## Pagination

Pagination with page navigation.

### Components

- `Pagination` - Root container
- `PaginationContent` - Content wrapper
- `PaginationItem` - Individual item
- `PaginationLink` - Page link
- `PaginationPrevious` - Previous button
- `PaginationNext` - Next button
- `PaginationEllipsis` - Ellipsis

### Usage

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>;
```

### Props

- `PaginationLink`: `isActive?: boolean`, `size?: "default" | "sm" | "lg" | "icon"`
- All other components accept standard HTML element props

---

## Popover

Displays rich content in a portal, triggered by a button.

### Components

- `Popover` - Root container
- `PopoverTrigger` - Trigger button
- `PopoverContent` - Popover content
- `PopoverAnchor` - Anchor element

### Usage

```tsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
    </div>
  </PopoverContent>
</Popover>;
```

### Props

- `PopoverContent`: `align?: "start" | "center" | "end"`, `sideOffset?: number`
- All other components accept their respective Radix UI primitive props

---

## Radio Group

A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.

### Components

- `RadioGroup` - Root container
- `RadioGroupItem` - Individual radio button

### Usage

```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>;
```

### Props

All components accept their respective Radix UI primitive props.

---

## Select

Displays a list of options for the user to pick from—triggered by a button.

### Components

- `Select` - Root container
- `SelectGroup` - Group of options
- `SelectValue` - Selected value display
- `SelectTrigger` - Trigger button
- `SelectContent` - Dropdown content
- `SelectLabel` - Group label
- `SelectItem` - Individual option
- `SelectSeparator` - Separator
- `SelectScrollUpButton` - Scroll up button
- `SelectScrollDownButton` - Scroll down button

### Usage

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
    <SelectItem value="grapes">Grapes</SelectItem>
    <SelectItem value="pineapple">Pineapple</SelectItem>
  </SelectContent>
</Select>;
```

### Props

- `SelectTrigger`: `size?: "sm" | "default"`
- `SelectContent`: `position?: "popper" | "item-aligned"`
- All other components accept their respective Radix UI primitive props

---

## Separator

Visually or semantically separates content.

### Components

- `Separator` - Separator component

### Usage

```tsx
import { Separator } from "@/components/ui/separator";

<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
    <p className="text-sm text-muted-foreground">
      An open-source UI component library.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>;
```

### Props

- `Separator`: `orientation?: "horizontal" | "vertical"`, `decorative?: boolean`

---

## Switch

A control that allows the user to toggle between checked and not checked.

### Components

- `Switch` - Switch component

### Usage

```tsx
import { Switch } from "@/components/ui/switch"

<Switch />
<Switch defaultChecked />
<Switch disabled />
```

### Props

- `Switch`: All Radix UI Switch.Root props

---

## Tabs

A set of layered sections of content—known as tab panels—that are displayed one at a time.

### Components

- `Tabs` - Root container
- `TabsList` - List of tabs
- `TabsTrigger` - Tab trigger
- `TabsContent` - Tab content

### Usage

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>;
```

### Props

All components accept their respective Radix UI primitive props.

---

## Textarea

Displays a form textarea or a component that looks like a textarea.

### Components

- `Textarea` - Textarea component

### Usage

```tsx
import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Type your message here." />
<Textarea disabled />
```

### Props

- `Textarea`: All standard textarea element props

---

## Styling

All components use Tailwind CSS for styling and include:

- Consistent spacing and sizing
- Dark mode support
- Focus states and accessibility
- Responsive design
- Custom CSS variables for theming

## Accessibility

All components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## Customization

Components can be customized by:

- Passing custom className props
- Using CSS variables for theming
- Extending component variants
- Composing components together

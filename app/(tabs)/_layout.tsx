import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";

const TabIcons = ({
  src,
  iconPath,
  title,
  focused,
}: {
  src: ImageSourcePropType;
  iconPath: ImageSourcePropType;
  title: string;
  focused: boolean;
}) => {
  if (focused) {
    return (
      <ImageBackground
        source={src}
        className="flex p-1 flex-1 flex-row w-full  gap-2 min-w-[90px] my-auto min-h-14  justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={iconPath} tintColor="#151312" />
        <Text>{title}</Text>
      </ImageBackground>
    );
  }
  return (
    <View className="flex flex-1 p-1 items-center justify-center min-h-14 size-full my-auto rounded-full">
      <Image source={iconPath} tintColor={"white"} />
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0d23",
            padding: 5,
          marginInline: "3%",
          marginBottom: 16,
          height: 56,
          borderRadius: 36,
          overflow: "hidden",
          width: "94%",
          position: "absolute",
          borderWidth: 1,
          borderColor: "#of0d23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcons
                src={images.highlight}
                iconPath={icons.home}
                title="Home"
                focused={focused}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcons
                src={images.highlight}
                iconPath={icons.search}
                title="Search"
                focused={focused}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
         
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcons
                src={images.highlight}
                iconPath={icons.save}
                title="Saved"
                focused={focused}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcons
                src={images.highlight}
                iconPath={icons.person}
                title="Profile"
                focused={focused}
              />
            </>
          ),
        }}
      />
    </Tabs>
  );
}
